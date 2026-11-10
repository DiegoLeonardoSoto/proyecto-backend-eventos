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

if (!process.env.JWT_EXPIRES_IN) {
  console.log('Hace falta un JWT_EXPIRES_IN')
  process.exit(1)
}

export const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
}
