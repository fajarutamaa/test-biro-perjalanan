import { Router } from 'express'
import { TripInvoiceController } from '../controllers/invoice.controller'
import { PrismaTripInvoiceRepository } from '../repositories/invoice.repository.prisma'
import { TripInvoiceService } from '../services/invoice.service'
import { TripPayHistoryService } from '@/modules/payment-history/services/payhist.service'
import { PrismaPaymentHistoryRepository } from '@/modules/payment-history/repositories/payhist.repository.prisma'
import { PrismaTripRepository } from '@/modules/trip/repositories/trip.repository.prisma'
import { TripService } from '@/modules/trip/services/trip.service'

const repo = new PrismaTripInvoiceRepository()
const payRepo = new PrismaPaymentHistoryRepository()
const tripRepo = new PrismaTripRepository()

const service = new TripInvoiceService(repo)
const payHistoryService = new TripPayHistoryService(payRepo)
const tripService = new TripService(tripRepo)

const controller = new TripInvoiceController(service, payHistoryService, tripService)

const router = Router()

router.post('/handle-callback', controller.handleCallback)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)

export default router
