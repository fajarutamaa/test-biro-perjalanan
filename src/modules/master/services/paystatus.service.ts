import { MasterPaymentStatusRepository } from '../repositories/paystatus.repository'

export class MasterPaymentStatusService {
    constructor(private readonly repo: MasterPaymentStatusRepository) {}

    findById(pay_status_id: number) {
        return this.repo.findById(pay_status_id)
    }
}
