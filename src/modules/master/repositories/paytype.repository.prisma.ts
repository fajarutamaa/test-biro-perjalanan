import { prisma } from '@/config/prisma'
import { tb_payment_type } from '@/generated/prisma'
import { MasterPayTypeRepository } from './paytype.repository'

export class PrismaMasterPayTypeRepository implements MasterPayTypeRepository {
    findAll(): Promise<tb_payment_type[]> {
        return prisma.tb_payment_type.findMany()
    }
}
