import { Express } from 'express'
import { userRoutes } from '@/modules/user'
import { tripRoutes } from '@/modules/trip'
import { destinationsRoutes, payTypeRoutes, tripStatusRoutes } from '@/modules/master'
import { adminRoutes } from '@/modules/admin'

export const routes = (app: Express) => {
    app.use('/api/trips', tripRoutes)
    app.use('/api/users', userRoutes)

    app.use('/api/admin', adminRoutes)

    // master routes
    app.use('/api/master/destinations', destinationsRoutes)
    app.use('/api/master/trip-status', tripStatusRoutes)
    app.use('/api/master/pay-type', payTypeRoutes)

    app.get('/', (req, res) => {
        res.status(200).json({
            code: 200,
            status: 'OK',
            message: 'Check Health Successfully - Fajar Dwi Utomo',
        })
    })
}
