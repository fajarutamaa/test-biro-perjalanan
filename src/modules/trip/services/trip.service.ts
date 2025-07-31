import { CreateTripDTO } from '../dtos'
import { TripRepository } from '../repositories/trip.repository'
import { tb_trip } from '@/generated/prisma'

export class TripService {
    constructor(private readonly repo: TripRepository) {}

    create(data: CreateTripDTO) {
        return this.repo.create(data)
    }

    findAllByUserIdAndStatus(user_id: string) {
        return this.repo.findAllByUserIdAndStatus(user_id)
    }

    findAll() {
        return this.repo.findAll()
    }

    findById(id: number) {
        return this.repo.findById(id)
    }

    update(id: number, data: Partial<tb_trip>) {
        return this.repo.update(id, data)
    }

    delete(id: number) {
        return this.repo.delete(id)
    }
}
