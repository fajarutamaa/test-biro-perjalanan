import Joi from 'joi'

export interface RegisterDTO {
    name: string
    email: string
    password: string
}

export const registerSchema = Joi.object<RegisterDTO>({
    name: Joi.string()
        .min(3)
        .max(200) 
        .required()
        .messages({
            'string.min': 'Nama minimal 3 karakter',
            'string.max': 'Nama maksimal 50 karakter',
            'string.empty': 'Nama tidak boleh kosong',
            'any.required': 'Nama harus diisi',
        }),
    email: Joi.string()
        .email()
        .max(100)
        .required()
        .messages({
            'string.email': 'Email tidak valid',
            'string.max': 'Email maksimal 100 karakter',
            'string.empty': 'Email tidak boleh kosong',
            'any.required': 'Email harus diisi',
        }),
    password: Joi.string()
        .min(6)
        .max(10) 
        .pattern(/[A-Z]/)
        .pattern(/[0-9]/)
        .required()
        .messages({
            'string.min': 'Password minimal 8 karakter',
            'string.max': 'Password maksimal 30 karakter',
            'string.pattern.base': 'Password harus mengandung huruf besar dan angka',
            'string.empty': 'Password tidak boleh kosong',
            'any.required': 'Password harus diisi',
        }),
})
