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

export const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
}
