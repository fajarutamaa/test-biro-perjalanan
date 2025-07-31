import { tb_user } from '@/generated/prisma'

export const mapUsers = (user: tb_user) => ({
    user_id: user.user_id,
    name: user.name,
    email: user.email,
    created_at: user.created_at?.toISOString(),
    is_active: user.is_active,
})

export const responseUsers = (users: tb_user[]) => users.map(mapUsers)
