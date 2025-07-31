import { Router } from 'express'
import { MasterDestinationsController } from '../controllers/destinations.controller'
import { PrismaMasterDestinationsRepository } from '../repositories/destinations.repository.prisma'
import { MasterDestinationsService } from '../services/destinations.service'

const repo = new PrismaMasterDestinationsRepository()
const service = new MasterDestinationsService(repo)
const controller = new MasterDestinationsController(service)

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)

export default router
