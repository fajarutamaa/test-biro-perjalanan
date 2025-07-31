import dotenv from 'dotenv'

dotenv.config()

if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in .env')
}

const config = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
}

export default config
