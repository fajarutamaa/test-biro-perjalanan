import { TripInvoiceService } from '../services/invoice.service'
import { TripInvoiceRepository } from '../repositories/invoice.repository'
import { CreateTripInvoiceDTO } from '@/modules/invoice/dtos'
import { tb_trip_invoice } from '@/generated/prisma'

describe('TripInvoiceService', () => {
    let tripInvoiceService: TripInvoiceService
    let mockRepo: jest.Mocked<TripInvoiceRepository>

    beforeEach(() => {
        mockRepo = {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findInvoiceByInvoiceNo: jest.fn(),
        } as unknown as jest.Mocked<TripInvoiceRepository>

        tripInvoiceService = new TripInvoiceService(mockRepo)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('create', () => {
        it('should create a new invoice with correct model structure', async () => {
            const invoiceData: CreateTripInvoiceDTO = {
                invoice_no: 'INV-2023-001',
                quantity: 1n,
                total_amount: 1000.5,
                pay_type_id: 1n,
                trip_id: 1n,
            }

            const expectedInvoice: tb_trip_invoice = {
                trip_invoice_id: 1n,
                ...invoiceData,
                tb_payment_history: [],
                tb_payment_type: null,
                tb_trip: null,
            }

            mockRepo.create.mockResolvedValue(expectedInvoice)

            const result = await tripInvoiceService.create(invoiceData)

            expect(mockRepo.create).toHaveBeenCalledWith(invoiceData)
            expect(result).toEqual(expectedInvoice)
            expect(result.trip_invoice_id).toBeDefined()
            expect(result.tb_payment_history).toEqual([])
        })

        it('should handle optional fields correctly', async () => {
            const minimalInvoiceData: CreateTripInvoiceDTO = {
                invoice_no: 'INV-2023-002',
            }

            const expectedInvoice: tb_trip_invoice = {
                trip_invoice_id: 2n,
                invoice_no: 'INV-2023-002',
                quantity: null,
                total_amount: null,
                pay_type_id: null,
                trip_id: null,
                tb_payment_history: [],
                tb_payment_type: null,
                tb_trip: null,
            }

            mockRepo.create.mockResolvedValue(expectedInvoice)

            const result = await tripInvoiceService.create(minimalInvoiceData)

            expect(result.quantity).toBeNull()
            expect(result.trip_id).toBeNull()
        })
    })

    describe('findById', () => {
        it('should find invoice by trip_invoice_id (not id)', async () => {
            const invoiceId = 1n
            const expectedInvoice: tb_trip_invoice = {
                trip_invoice_id: invoiceId,
                invoice_no: 'INV-2023-001',
                quantity: 1n,
                total_amount: 1000.5,
                pay_type_id: 1n,
                trip_id: 1n,
                tb_payment_history: [],
                tb_payment_type: null,
                tb_trip: null,
            }

            mockRepo.findById.mockResolvedValue(expectedInvoice)

            const result = await tripInvoiceService.findById(Number(invoiceId))

            expect(mockRepo.findById).toHaveBeenCalledWith(Number(invoiceId))
            expect(result?.trip_invoice_id).toEqual(invoiceId)
        })
    })

    describe('update', () => {
        it('should update invoice with partial data', async () => {
            const invoiceId = 1n
            const updateData: Partial<tb_trip_invoice> = {
                quantity: 2n,
                total_amount: 2000.0,
            }

            const updatedInvoice: tb_trip_invoice = {
                trip_invoice_id: invoiceId,
                invoice_no: 'INV-2023-001',
                quantity: 2n,
                total_amount: 2000.0,
                pay_type_id: 1n,
                trip_id: 1n,
                tb_payment_history: [],
                tb_payment_type: null,
                tb_trip: null,
            }

            mockRepo.update.mockResolvedValue(updatedInvoice)

            const result = await tripInvoiceService.update(Number(invoiceId), updateData)

            expect(mockRepo.update).toHaveBeenCalledWith(Number(invoiceId), updateData)
            expect(result.quantity).toBe(2n)
            expect(result.total_amount).toBe(2000.0)
        })
    })

    describe('findInvoiceByInvoiceNo', () => {
        it('should find invoice by invoice_no field', async () => {
            const invoiceNo = 'INV-2023-001'
            const expectedInvoice: tb_trip_invoice = {
                trip_invoice_id: 1n,
                invoice_no: invoiceNo,
                quantity: 1n,
                total_amount: 1000.5,
                pay_type_id: 1n,
                trip_id: 1n,
                tb_payment_history: [],
                tb_payment_type: null,
                tb_trip: null,
            }

            mockRepo.findInvoiceByInvoiceNo.mockResolvedValue(expectedInvoice)

            const result = await tripInvoiceService.findInvoiceByInvoiceNo(invoiceNo)

            expect(mockRepo.findInvoiceByInvoiceNo).toHaveBeenCalledWith(invoiceNo)
            expect(result?.invoice_no).toEqual(invoiceNo)
        })
    })

    // Additional tests for relations
    describe('relations', () => {
        it('should include empty payment history array when no payments exist', async () => {
            const invoiceId = 1n
            const invoiceWithRelations: tb_trip_invoice = {
                trip_invoice_id: invoiceId,
                invoice_no: 'INV-2023-001',
                quantity: 1n,
                total_amount: 1000.5,
                pay_type_id: 1n,
                trip_id: 1n,
                tb_payment_history: [],
                tb_payment_type: {
                    pay_type_id: 1n,
                    name: 'Credit Card',
                    code: 'CC',
                },
                tb_trip: null,
            }

            mockRepo.findById.mockResolvedValue(invoiceWithRelations)

            const result = await tripInvoiceService.findById(Number(invoiceId))

            expect(result?.tb_payment_history).toEqual([])
            expect(result?.tb_payment_type?.name).toBe('Credit Card')
        })
    })
})
