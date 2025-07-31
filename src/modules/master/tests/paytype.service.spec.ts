import { MasterPayTypeService } from '@/modules/master/services/paytype.service'
import { MasterPayTypeRepository } from '@/modules/master/repositories/paytype.repository'

describe('MasterPayTypeService', () => {
    let service: MasterPayTypeService
    let mockRepo: jest.Mocked<MasterPayTypeRepository>

    const dummyPayTypes = [
        {
            pay_type_id: BigInt(1),
            name: 'Credit Card',
            tb_trip_invoice: [],
        },
        {
            pay_type_id: BigInt(2),
            name: 'Cash',
            tb_trip_invoice: [],
        },
    ]

    beforeEach(() => {
        mockRepo = {
            findAll: jest.fn(),
        } as unknown as jest.Mocked<MasterPayTypeRepository>

        service = new MasterPayTypeService(mockRepo)
    })

    it('should return all pay types', async () => {
        mockRepo.findAll.mockResolvedValue(dummyPayTypes)

        const result = await service.findAll()

        expect(mockRepo.findAll).toHaveBeenCalled()
        expect(result).toEqual(dummyPayTypes)
    })
})
