import Joi from 'joi'

export const CreateTripSchema = Joi.object({
    destination_id: Joi.string().required(),
    quantity: Joi.number().required(),
    schedule_at: Joi.date().required(),
    pay_type_id: Joi.number().required(),
})
