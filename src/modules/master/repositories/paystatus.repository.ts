import { tb_payment_status } from '@/generated/prisma'

export interface MasterPaymentStatusRepository {
    findById(payment_status_id: number): Promise<tb_payment_status | null>
}
