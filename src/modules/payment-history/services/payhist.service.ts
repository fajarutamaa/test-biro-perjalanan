import { PayHistoryRepository } from '../repositories/payhist.repository'
import { tb_payment_history } from '@/generated/prisma'
import { CreatePayHistoryDTO } from '@/modules/payment-history/dtos'

export class TripPayHistoryService {
    constructor(private readonly repo: PayHistoryRepository) {}

    create(data: CreatePayHistoryDTO) {
        return this.repo.createPaymentHistory(data)
    }
}
