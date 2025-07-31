import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import config from './config'
import { routes } from './config/routes'
import { errorHandler } from './middlewares/error.middleware'
import morgan from 'morgan'

const app = express()

const isProduction = config.NODE_ENV! === 'production'
app.use(morgan(isProduction ? 'combined' : 'dev'))

app.use(cors())
app.use(helmet())
app.use(express.json())
routes(app)

app.use(errorHandler)

const PORT = config.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
