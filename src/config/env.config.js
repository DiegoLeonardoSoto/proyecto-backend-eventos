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

if (!process.env.JWT_SECRET) {
  console.log('Hace falta un JWT_SECRET')
  process.exit(1)
}

if (!process.env.EXPIRATION_TIME) {
  console.log('Hace falta un EXPIRATION_TIME')
  process.exit(1)
}

export const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRATION_TIME: process.env.EXPIRATION_TIME
}
