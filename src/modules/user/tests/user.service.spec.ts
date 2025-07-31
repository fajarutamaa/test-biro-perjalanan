import { UserService } from '../services/user.service'
import { UserRepository } from '../repositories/user.repository.prisma'
import { AllReadyExistError, BadRequestError, NotFoundError } from '@/utils/error'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Mock semua dependensi eksternal
jest.mock('../repositories/user.repository.prisma')
jest.mock('bcryptjs')
jest.mock('jsonwebtoken')

describe('UserService', () => {
    let userService: UserService
    let mockUserRepo: jest.Mocked<UserRepository>

    // Data test yang lebih komprehensif
    const baseUser = {
        id: 'user-123',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'hashedpass',
        role_id: 3,
        is_active: true,
        created_at: new Date('2023-01-01'),
        updated_at: new Date('2023-01-01'),
    }

    const edgeCases = {
        longName: 'A'.repeat(255),
        longEmail: `${'a'.repeat(244)}@example.com`,
        longPassword: '1'.repeat(100),
        shortName: 'A',
        shortPassword: '1',
    }

    beforeEach(() => {
        mockUserRepo = new UserRepository() as jest.Mocked<UserRepository>
        userService = new UserService(mockUserRepo)
        jest.clearAllMocks()

        // Reset semua mock ke default
        ;(bcrypt.hash as jest.Mock).mockImplementation((pass) => Promise.resolve(`hashed_${pass}`))
        ;(bcrypt.compare as jest.Mock).mockResolvedValue(true)
        ;(jwt.sign as jest.Mock).mockReturnValue('mocked_token')
    })

    describe('register', () => {
        const validInput = {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'validPass123',
        }

        it('should reject empty name', async () => {
            await expect(userService.register({ ...validInput, name: '' })).rejects.toThrow(BadRequestError)
        })

        it('should reject invalid email format', async () => {
            await expect(userService.register({ ...validInput, email: 'invalid-email' })).rejects.toThrow(
                BadRequestError
            )
        })

        it('should reject password less than 6 chars', async () => {
            await expect(userService.register({ ...validInput, password: '12345' })).rejects.toThrow(BadRequestError)
        })

        it('should handle maximum length inputs', async () => {
            const input = {
                name: edgeCases.longName,
                email: edgeCases.longEmail,
                password: edgeCases.longPassword,
            }

            mockUserRepo.findByEmail.mockResolvedValue(null)
            mockUserRepo.create.mockResolvedValue({ ...baseUser, ...input })

            const result = await userService.register(input)

            expect(result.name).toBe(edgeCases.longName)
            expect(result.email).toBe(edgeCases.longEmail)
        })

        it('should hash password with unique salt per user', async () => {
            mockUserRepo.findByEmail.mockResolvedValue(null)
            mockUserRepo.create.mockImplementation(async (user) => user)

            await userService.register(validInput)

            expect(bcrypt.hash).toHaveBeenCalledWith(validInput.password, expect.any(Number))
        })

        it('should not expose password hash in response', async () => {
            mockUserRepo.findByEmail.mockResolvedValue(null)
            mockUserRepo.create.mockResolvedValue(baseUser)

            const result = await userService.register(validInput)

            expect(result).not.toHaveProperty('password')
            expect(result).toEqual(
                expect.objectContaining({
                    name: validInput.name,
                    email: validInput.email,
                })
            )
        })
    })

    describe('login', () => {
        const validCredentials = {
            email: 'john@example.com',
            password: 'correctPassword',
        }

        it('should reject empty email', async () => {
            await expect(userService.login('', 'password')).rejects.toThrow(BadRequestError)
        })

        it('should reject empty password', async () => {
            await expect(userService.login('email@example.com', '')).rejects.toThrow(BadRequestError)
        })

        it('should reject inactive users', async () => {
            mockUserRepo.findByEmail.mockResolvedValue({ ...baseUser, is_active: false })

            await expect(userService.login(validCredentials.email, validCredentials.password)).rejects.toThrow(
                BadRequestError
            )
        })

        it('should include user role in token payload', async () => {
            mockUserRepo.findByEmail.mockResolvedValue(baseUser)

            await userService.login(validCredentials.email, validCredentials.password)

            expect(jwt.sign).toHaveBeenCalledWith(
                expect.objectContaining({
                    role: baseUser.role_id,
                }),
                expect.any(String),
                expect.any(Object)
            )
        })

        it('should set reasonable token expiration', async () => {
            mockUserRepo.findByEmail.mockResolvedValue(baseUser)

            await userService.login(validCredentials.email, validCredentials.password)

            expect(jwt.sign).toHaveBeenCalledWith(
                expect.anything(),
                expect.anything(),
                expect.objectContaining({
                    expiresIn: expect.stringMatching(/^\d+[smhd]$/),
                })
            )
        })
    })

    describe('getUserById', () => {
        it('should throw NotFoundError for non-existent user', async () => {
            mockUserRepo.findById.mockResolvedValue(null)

            await expect(userService.getUserById('non-existent-id')).rejects.toThrow(NotFoundError)
        })

        it('should sanitize sensitive fields', async () => {
            mockUserRepo.findById.mockResolvedValue({
                ...baseUser,
                password: 'hashed',
                reset_token: 'sensitive',
            })

            const result = await userService.getUserById(baseUser.id)

            expect(result).not.toHaveProperty('password')
            expect(result).not.toHaveProperty('reset_token')
        })
    })

    describe('updateUser', () => {
        it('should validate input fields', async () => {
            await expect(userService.updateUser(baseUser.id, { email: 'invalid' })).rejects.toThrow(BadRequestError)
        })

        it('should prevent role escalation', async () => {
            await expect(userService.updateUser(baseUser.id, { role_id: 1 })) // admin role
                .rejects.toThrow(BadRequestError)
        })

        it('should audit update timestamps', async () => {
            const originalUser = { ...baseUser }
            mockUserRepo.update.mockResolvedValue({
                ...originalUser,
                updated_at: new Date(), // new timestamp
            })

            const result = await userService.updateUser(baseUser.id, { name: 'New Name' })

            expect(result.updated_at).not.toBe(originalUser.updated_at)
            expect(result.updated_at).toBeInstanceOf(Date)
        })
    })

    describe('deleteUser', () => {
        it('should verify user exists before deletion', async () => {
            mockUserRepo.findById.mockResolvedValue(null)

            await expect(userService.deleteUser('non-existent-id')).rejects.toThrow(NotFoundError)
        })

        it('should perform soft delete', async () => {
            mockUserRepo.findById.mockResolvedValue(baseUser)
            mockUserRepo.update.mockResolvedValue({ ...baseUser, is_active: false })

            const result = await userService.deleteUser(baseUser.id)

            expect(result.is_active).toBe(false)
            expect(mockUserRepo.update).toHaveBeenCalledWith(baseUser.id, { is_active: false })
        })
    })

    describe('listUsers', () => {
        it('should apply default pagination', async () => {
            mockUserRepo.findAll.mockResolvedValue([baseUser])

            await userService.listUsers()

            expect(mockUserRepo.findAll).toHaveBeenCalledWith({
                page: 1,
                limit: 10,
            })
        })

        it('should filter inactive users by default', async () => {
            mockUserRepo.findAll.mockResolvedValue([baseUser])

            await userService.listUsers()

            expect(mockUserRepo.findAll).toHaveBeenCalledWith(
                expect.objectContaining({
                    filter: expect.objectContaining({
                        is_active: true,
                    }),
                })
            )
        })

        it('should allow admin override filters', async () => {
            mockUserRepo.findAll.mockResolvedValue([baseUser])

            // Assume admin context
            await userService.listUsers({ showInactive: true })

            expect(mockUserRepo.findAll).toHaveBeenCalledWith(
                expect.objectContaining({
                    filter: expect.not.objectContaining({
                        is_active: expect.anything(),
                    }),
                })
            )
        })
    })
})
