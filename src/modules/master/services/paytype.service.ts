import { MasterPayTypeRepository } from '../repositories/paytype.repository'

export class MasterPayTypeService {
    constructor(private readonly repo: MasterPayTypeRepository) {}

    async findAll() {
        const data = await this.repo.findAll()
        return data
    }
}
