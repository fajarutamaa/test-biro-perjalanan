import { MasterDestinationsRepository } from '../repositories/destinations.repository'

export class MasterDestinationsService {
    constructor(private readonly repo: MasterDestinationsRepository) {}

    async findAll() {
        const data = await this.repo.findAll({ is_open: true })

        return data.map((item) => ({
            ...item,
            destination_id: Number(item.destination_id),
            quota: Number(item.quota),
        }))
    }

    findById(destination_id: number) {
        return this.repo.findById(destination_id)
    }

    update(destination_id: number, data: any) {
        return this.repo.update(destination_id, data)
    }
}
