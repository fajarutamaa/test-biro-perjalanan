import { MasterDestinationsService } from '../services/destinations.service'
import { MasterDestinationsRepository } from '../repositories/destinations.repository'
import { tb_destination } from '@/generated/prisma'

describe('MasterDestinationsService', () => {
    let service: MasterDestinationsService
    let mockRepo: jest.Mocked<MasterDestinationsRepository>

    beforeEach(() => {
        mockRepo = {
            findAll: jest.fn(),
            findById: jest.fn(),
        } as unknown as jest.Mocked<MasterDestinationsRepository>

        service = new MasterDestinationsService(mockRepo)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('findAll', () => {
        it('should return all open destinations with converted number fields', async () => {
            const mockDestinations: tb_destination[] = [
                {
                    destination_id: BigInt(1),
                    name: 'Bali Package',
                    destinations: ['Ubud', 'Kuta', 'Seminyak'],
                    quota: BigInt(10),
                    is_open: true,
                    price: 2500000,
                    tb_trip: [],
                },
                {
                    destination_id: BigInt(2),
                    name: 'Japan Package',
                    destinations: ['Tokyo', 'Osaka', 'Kyoto'],
                    quota: BigInt(30),
                    is_open: true,
                    price: 5000000,
                    tb_trip: [],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockDestinations)

            const result = await service.findAll()

            expect(mockRepo.findAll).toHaveBeenCalledWith({ is_open: true })
            expect(result).toEqual([
                {
                    destination_id: 1,
                    name: 'Bali Package',
                    destinations: ['Ubud', 'Kuta', 'Seminyak'],
                    quota: 50,
                    is_open: true,
                    price: 2500000.0,
                    tb_trip: [],
                },
                {
                    destination_id: 2,
                    name: 'Japan Package',
                    destinations: ['Tokyo', 'Osaka', 'Kyoto'],
                    quota: 30,
                    is_open: true,
                    price: 5000000.0,
                    tb_trip: [],
                },
            ])
        })

        it('should handle null quota values', async () => {
            const mockDestinations: tb_destination[] = [
                {
                    destination_id: BigInt(3),
                    name: 'Open Destination',
                    destinations: ['Location 1'],
                    quota: null,
                    is_open: true,
                    price: 1000000.0,
                    tb_trip: [],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockDestinations)

            const result = await service.findAll()

            expect(result[0].quota).toBeNull()
        })

        it('should return empty array when no open destinations found', async () => {
            mockRepo.findAll.mockResolvedValue([])

            const result = await service.findAll()

            expect(result).toEqual([])
        })
    })

    describe('findById', () => {
        it('should find destination by ID without number conversion', async () => {
            const destinationId = 1
            const mockDestination: tb_destination = {
                destination_id: BigInt(1),
                name: 'Bali Package',
                destinations: ['Ubud', 'Kuta', 'Seminyak'],
                quota: BigInt(50),
                is_open: true,
                price: 2500000.0,
                tb_trip: [],
            }

            mockRepo.findById.mockResolvedValue(mockDestination)

            const result = await service.findById(destinationId)

            expect(mockRepo.findById).toHaveBeenCalledWith(destinationId)
            expect(result).toEqual(mockDestination)
            // Verify no number conversion happens here
            expect(result?.destination_id).toBe(BigInt(1))
            expect(result?.quota).toBe(BigInt(50))
        })

        it('should return null when destination not found', async () => {
            const destinationId = 999
            mockRepo.findById.mockResolvedValue(null)

            const result = await service.findById(destinationId)

            expect(result).toBeNull()
        })
    })

    // Edge case tests
    describe('edge cases', () => {
        it('should handle empty destinations array', async () => {
            const mockDestinations: tb_destination[] = [
                {
                    destination_id: BigInt(4),
                    name: 'Empty Destination',
                    destinations: [],
                    quota: BigInt(10),
                    is_open: true,
                    price: 1000000,
                    tb_trip: [],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockDestinations)

            const result = await service.findAll()

            expect(result[0].destinations).toEqual([])
        })

        it('should handle null price values', async () => {
            const mockDestinations: tb_destination[] = [
                {
                    destination_id: BigInt(5),
                    name: 'Free Destination',
                    destinations: ['Free Location'],
                    quota: BigInt(100),
                    is_open: true,
                    price: null,
                    tb_trip: [],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockDestinations)

            const result = await service.findAll()

            expect(result[0].price).toBeNull()
        })
    })
})
