import { tb_user } from '@/generated/prisma'
import { formatToIsoUtc7 } from '@/utils/helpers'

export const mapUsers = (user: tb_user) => ({
    user_id: user.user_id,
    name: user.name,
    email: user.email,
    created_at: formatToIsoUtc7(user.created_at),
    is_active: user.is_active,
})

export const responseUsers = (users: tb_user[]) => users.map(mapUsers)
