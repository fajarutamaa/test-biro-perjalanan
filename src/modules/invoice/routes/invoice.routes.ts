import { Router } from 'express'
import { TripInvoiceController } from '../controllers/invoice.controller'
import { PrismaTripInvoiceRepository } from '../repositories/invoice.repository.prisma'
import { TripInvoiceService } from '../services/invoice.service'
import { TripPayHistoryService } from '@/modules/payment-history/services/payhist.service'
import { PrismaPaymentHistoryRepository } from '@/modules/payment-history/repositories/payhist.repository.prisma'

const repo = new PrismaTripInvoiceRepository()
const payRepo = new PrismaPaymentHistoryRepository()

const service = new TripInvoiceService(repo)
const payHistoryService = new TripPayHistoryService(payRepo)
const controller = new TripInvoiceController(service, payHistoryService)

const router = Router()

router.post('/handle-callback', controller.handleCallback)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.delete)

export default router
