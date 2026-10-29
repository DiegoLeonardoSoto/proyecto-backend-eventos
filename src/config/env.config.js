import dotenv from 'dotenv'

dotenv.config()

if (!process.env.PORT) {
    console.log('Hace falta un puerto')
    process.exit(1)
}


if (!process.env.NODE_ENV) {
    console.log('Hace falta un NODE_ENV')
    process.exit(1)
}

if (!process.env.MONGO_URL) {
    console.log('Hace falta un MONGO_URL')
    process.exit(1)
}

export const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL
}
