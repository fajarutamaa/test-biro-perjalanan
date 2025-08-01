import { tb_payment_type } from '@/generated/prisma'

export interface MasterPayTypeRepository {
    findAll(): Promise<tb_payment_type[]>
    findById(id: number): Promise<tb_payment_type | null>
}
