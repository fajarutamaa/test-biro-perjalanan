import { prisma } from '@/config/prisma'
import { tb_payment_status } from '@/generated/prisma'
import { MasterPaymentStatusRepository } from './paystatus.repository'

export class PrismaMasterPaymentStatusRepository implements MasterPaymentStatusRepository {
    async findById(payment_status_id: number): Promise<tb_payment_status | null> {
        return prisma.tb_payment_status.findUnique({ where: { pay_status_id: payment_status_id } })
    }
}
