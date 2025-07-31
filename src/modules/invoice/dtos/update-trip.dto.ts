import Joi from 'joi'

export const UpdateTripSchema = Joi.object({
    destination: Joi.string().optional(),
    start_time: Joi.date().optional(),
    end_time: Joi.date().optional(),
})
