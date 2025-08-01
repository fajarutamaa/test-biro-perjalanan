import { MasterTripStatusRepository } from '../repositories/tripstatus.repository'

export class MasterTripStatusService {
    constructor(private readonly repo: MasterTripStatusRepository) {}

    async findAll() {
        const data = await this.repo.findAll()
        const result = data.map((item) => ({
            ...item,
            trip_status_id: Number(item.trip_status_id),
        }))

        return result
    }

    async findById(id: number) {
        const data = await this.repo.findById(id)
        if (!data) return null
        return {
            ...data,
            trip_status_id: Number(data.trip_status_id),
        }
    }
}
