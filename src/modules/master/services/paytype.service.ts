import { MasterPayTypeRepository } from '../repositories/paytype.repository'

export class MasterPayTypeService {
    constructor(private readonly repo: MasterPayTypeRepository) {}

    async findAll() {
        const data = await this.repo.findAll()
        return data
    }

    async findById(id: number) {
        const data = await this.repo.findById(id)
        if (!data) return null
        return {
            ...data,
            pay_type_id: Number(data.pay_type_id),
        }
    }
}
