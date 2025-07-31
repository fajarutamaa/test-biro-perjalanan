import { TripService } from '../services/trip.service'
import { TripRepository } from '../repositories/trip.repository'
import { CreateTripDTO } from '../dtos'
import { tb_trip } from '@/generated/prisma'

describe('TripService', () => {
    let tripService: TripService
    let mockTripRepository: jest.Mocked<TripRepository>

    beforeEach(() => {
        mockTripRepository = {
            create: jest.fn(),
            findAllByUserIdAndStatus: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        } as unknown as jest.Mocked<TripRepository>

        tripService = new TripService(mockTripRepository)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('create', () => {
        it('should call repository.create with correct parameters', async () => {
            const tripData: CreateTripDTO = {
                user_id: 'user1',
                name: 'Summer Vacation',
                description: 'Trip to Bali',
                start_date: new Date('2023-07-01'),
                end_date: new Date('2023-07-10'),
                status: 'planned',
            }

            const expectedTrip: tb_trip = {
                id: 1,
                ...tripData,
                created_at: new Date(),
                updated_at: new Date(),
            }

            mockTripRepository.create.mockResolvedValue(expectedTrip)

            const result = await tripService.create(tripData)

            expect(mockTripRepository.create).toHaveBeenCalledWith(tripData)
            expect(result).toEqual(expectedTrip)
        })
    })

    describe('findAllByUserIdAndStatus', () => {
        it('should call repository.findAllByUserIdAndStatus with correct userId', async () => {
            const userId = 'user1'
            const expectedTrips: tb_trip[] = [
                {
                    id: 1,
                    user_id: userId,
                    name: 'Trip 1',
                    description: 'Description 1',
                    start_date: new Date(),
                    end_date: new Date(),
                    status: 'active',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ]

            mockTripRepository.findAllByUserIdAndStatus.mockResolvedValue(expectedTrips)

            const result = await tripService.findAllByUserIdAndStatus(userId)

            expect(mockTripRepository.findAllByUserIdAndStatus).toHaveBeenCalledWith(userId)
            expect(result).toEqual(expectedTrips)
        })
    })

    describe('findAll', () => {
        it('should call repository.findAll and return all trips', async () => {
            const expectedTrips: tb_trip[] = [
                {
                    id: 1,
                    user_id: 'user1',
                    name: 'Trip 1',
                    description: 'Description 1',
                    start_date: new Date(),
                    end_date: new Date(),
                    status: 'active',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    id: 2,
                    user_id: 'user2',
                    name: 'Trip 2',
                    description: 'Description 2',
                    start_date: new Date(),
                    end_date: new Date(),
                    status: 'completed',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ]

            mockTripRepository.findAll.mockResolvedValue(expectedTrips)

            const result = await tripService.findAll()

            expect(mockTripRepository.findAll).toHaveBeenCalled()
            expect(result).toEqual(expectedTrips)
        })
    })

    describe('findById', () => {
        it('should call repository.findById with correct id', async () => {
            const tripId = 1
            const expectedTrip: tb_trip = {
                id: tripId,
                user_id: 'user1',
                name: 'Trip 1',
                description: 'Description 1',
                start_date: new Date(),
                end_date: new Date(),
                status: 'active',
                created_at: new Date(),
                updated_at: new Date(),
            }

            mockTripRepository.findById.mockResolvedValue(expectedTrip)

            const result = await tripService.findById(tripId)

            expect(mockTripRepository.findById).toHaveBeenCalledWith(tripId)
            expect(result).toEqual(expectedTrip)
        })

        it('should return null when trip is not found', async () => {
            const tripId = 999
            mockTripRepository.findById.mockResolvedValue(null)

            const result = await tripService.findById(tripId)

            expect(result).toBeNull()
        })
    })

    describe('update', () => {
        it('should call repository.update with correct parameters', async () => {
            const tripId = 1
            const updateData: Partial<tb_trip> = {
                name: 'Updated Trip Name',
                status: 'completed',
            }

            const updatedTrip: tb_trip = {
                id: tripId,
                user_id: 'user1',
                name: 'Updated Trip Name',
                description: 'Original Description',
                start_date: new Date(),
                end_date: new Date(),
                status: 'completed',
                created_at: new Date(),
                updated_at: new Date(),
            }

            mockTripRepository.update.mockResolvedValue(updatedTrip)

            const result = await tripService.update(tripId, updateData)

            expect(mockTripRepository.update).toHaveBeenCalledWith(tripId, updateData)
            expect(result).toEqual(updatedTrip)
        })
    })

    describe('delete', () => {
        it('should call repository.delete with correct id', async () => {
            const tripId = 1
            const deletedTrip: tb_trip = {
                id: tripId,
                user_id: 'user1',
                name: 'Trip to delete',
                description: 'Description',
                start_date: new Date(),
                end_date: new Date(),
                status: 'active',
                created_at: new Date(),
                updated_at: new Date(),
            }

            mockTripRepository.delete.mockResolvedValue(deletedTrip)

            const result = await tripService.delete(tripId)

            expect(mockTripRepository.delete).toHaveBeenCalledWith(tripId)
            expect(result).toEqual(deletedTrip)
        })
    })
})
