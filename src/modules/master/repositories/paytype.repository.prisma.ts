import { prisma } from '@/config/prisma'
import { tb_payment_type } from '@/generated/prisma'
import { MasterPayTypeRepository } from './paytype.repository'

export class PrismaMasterPayTypeRepository implements MasterPayTypeRepository {
    findAll(): Promise<tb_payment_type[]> {
        return prisma.tb_payment_type.findMany()
    }

    findById(id: number): Promise<tb_payment_type | null> {
        return prisma.tb_payment_type.findUnique({ where: { pay_type_id: id } })
    }
}
