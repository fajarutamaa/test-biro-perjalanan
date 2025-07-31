import { tb_payment_history } from '@/generated/prisma'
import { CreatePayHistoryDTO } from '@/modules/payment-history/dtos'

export interface PayHistoryRepository {
    createPaymentHistory(data: CreatePayHistoryDTO): Promise<void>
}
