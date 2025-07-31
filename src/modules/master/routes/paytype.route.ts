import { Router } from 'express'
import { MasterPayTypeController } from '../controllers/paytype.controller'
import { PrismaMasterPayTypeRepository } from '../repositories/paytype.repository.prisma'
import { MasterPayTypeService } from '../services/paytype.service'

const repo = new PrismaMasterPayTypeRepository()
const service = new MasterPayTypeService(repo)
const controller = new MasterPayTypeController(service)

const router = Router()

router.get('/', controller.getAll)

export default router
