import { prisma } from '@/config/prisma'
import { PayHistoryRepository } from './payhist.repository'
import { tb_payment_history } from '@/generated/prisma'
import { CreatePayHistoryDTO } from '@/modules/payment-history/dtos'

export class PrismaPaymentHistoryRepository implements PayHistoryRepository {
    async createPaymentHistory(data: CreatePayHistoryDTO) {
        const trip = await prisma.tb_payment_history.create({ data })
        return
    }
}
