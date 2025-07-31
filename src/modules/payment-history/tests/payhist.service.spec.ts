import { TripPayHistoryService } from '../services/payhist.service'
import { PayHistoryRepository } from '../repositories/payhist.repository'
import { CreatePayHistoryDTO } from '@/modules/payment-history/dtos'
import { tb_payment_history } from '@/generated/prisma'

describe('TripPayHistoryService', () => {
    let tripPayHistoryService: TripPayHistoryService
    let mockPayHistoryRepository: jest.Mocked<PayHistoryRepository>

    beforeEach(() => {
        mockPayHistoryRepository = {
            createPaymentHistory: jest.fn(),
            // Add other repository methods if needed
        } as unknown as jest.Mocked<PayHistoryRepository>

        tripPayHistoryService = new TripPayHistoryService(mockPayHistoryRepository)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('create', () => {
        it('should successfully create a payment history record', async () => {
            // Arrange
            const paymentData: CreatePayHistoryDTO = {
                trip_invoice_id: 1,
                pay_status_id: BigInt(2),
            }

            const expectedPaymentHistory: tb_payment_history = {
                ...paymentData,
                created_at: new Date(),
            }

            mockPayHistoryRepository.createPaymentHistory.mockResolvedValue(expectedPaymentHistory)

            // Act
            const result = await tripPayHistoryService.create(paymentData)

            // Assert
            expect(mockPayHistoryRepository.createPaymentHistory).toHaveBeenCalledTimes(1)
            expect(mockPayHistoryRepository.createPaymentHistory).toHaveBeenCalledWith(paymentData)
            expect(result).toEqual(expectedPaymentHistory)
        })

        it('should handle repository errors when creating payment history', async () => {
            // Arrange
            const paymentData: CreatePayHistoryDTO = {
                trip_invoice_id: 1,
                pay_status_id: BigInt(2),
            }

            const error = new Error('Database error')
            mockPayHistoryRepository.createPaymentHistory.mockRejectedValue(error)

            // Act & Assert
            await expect(tripPayHistoryService.create(paymentData)).rejects.toThrow(error)
            expect(mockPayHistoryRepository.createPaymentHistory).toHaveBeenCalledTimes(1)
        })

        it('should validate required fields before creating payment history', async () => {
            // Arrange
            const invalidPaymentData = {
                // Missing required fields
                trip_invoice_id: 1,
                pay_status_id: BigInt(10),
            } as unknown as CreatePayHistoryDTO

            // Act & Assert
            await expect(tripPayHistoryService.create(invalidPaymentData)).rejects.toThrow()
            expect(mockPayHistoryRepository.createPaymentHistory).not.toHaveBeenCalled()
        })
    })

    // Add more test suites if the service grows with more methods
})
