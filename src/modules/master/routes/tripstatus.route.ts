import { Router } from 'express'
import { MasterTripStatusController } from '../controllers/tripstatus.controller'
import { PrismaMasterTripStatusRepository } from '../repositories/tripstatus.repository.prisma'
import { MasterTripStatusService } from '../services/tripstatus.service'

const repo = new PrismaMasterTripStatusRepository()
const service = new MasterTripStatusService(repo)
const controller = new MasterTripStatusController(service)

const router = Router()

router.get('/', controller.getAll)

export default router
