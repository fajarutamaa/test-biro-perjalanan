import { MasterTripStatusService } from '../services/tripstatus.service'
import { MasterTripStatusRepository } from '../repositories/tripstatus.repository'
import { tb_trip_status } from '@/generated/prisma'

describe('MasterTripStatusService', () => {
    let service: MasterTripStatusService
    let mockRepo: jest.Mocked<MasterTripStatusRepository>

    beforeEach(() => {
        mockRepo = {
            findAll: jest.fn(),
        } as unknown as jest.Mocked<MasterTripStatusRepository>

        service = new MasterTripStatusService(mockRepo)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('findAll', () => {
        it('should return all trip statuses with converted trip_status_id', async () => {
            // Arrange
            const mockStatuses: tb_trip_status[] = [
                {
                    trip_status_id: 1n,
                    name: 'Draft',
                    tb_trip: [],
                },
                {
                    trip_status_id: 2n,
                    name: 'Published',
                    tb_trip: [],
                },
                {
                    trip_status_id: 3n,
                    name: 'Completed',
                    tb_trip: [],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockStatuses)

            // Act
            const result = await service.findAll()

            // Assert
            expect(mockRepo.findAll).toHaveBeenCalledTimes(1)
            expect(result).toEqual([
                {
                    trip_status_id: 1,
                    name: 'Draft',
                    tb_trip: [],
                },
                {
                    trip_status_id: 2,
                    name: 'Published',
                    tb_trip: [],
                },
                {
                    trip_status_id: 3,
                    name: 'Completed',
                    tb_trip: [],
                },
            ])
        })

        it('should return empty array when no statuses found', async () => {
            // Arrange
            mockRepo.findAll.mockResolvedValue([])

            // Act
            const result = await service.findAll()

            // Assert
            expect(result).toEqual([])
        })

        it('should handle null values in name field', async () => {
            // Arrange
            const mockStatuses: tb_trip_status[] = [
                {
                    trip_status_id: 1n,
                    name: null,
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockStatuses)

            // Act
            const result = await service.findAll()

            // Assert
            expect(result).toEqual([
                {
                    trip_status_id: 1,
                    name: null,
                },
            ])
        })

        it('should preserve trip relations in the response', async () => {
            // Arrange
            const mockStatuses: tb_trip_status[] = [
                {
                    trip_status_id: 1n,
                    name: 'Draft',
                    tb_trip: [
                        {
                            trip_id: 1n,
                            name: 'Test Trip',
                            // ... other trip fields
                        } as any, // Using 'as any' to simplify test data
                    ],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockStatuses)

            // Act
            const result = await service.findAll()

            // Assert
            expect(result[0].tb_trip).toHaveLength(1)
            expect(result[0].tb_trip[0].trip_id).toBe(1n) // Trip IDs remain as BigInt
        })

        it('should convert BigInt trip_status_id to Number', async () => {
            // Arrange
            const mockStatuses: tb_trip_status[] = [
                {
                    trip_status_id: 12345678901234567890n,
                    name: 'Test',
                    tb_trip: [],
                },
            ]

            mockRepo.findAll.mockResolvedValue(mockStatuses)

            // Act
            const result = await service.findAll()

            // Assert
            expect(typeof result[0].trip_status_id).toBe('number')
            // Note: Very large BigInts may lose precision when converted to Number
        })
    })
})
