import app from './app.js'
import { connectToMongoDB } from './config/db.js'
import {env} from './config/env.config.js'



try {
  await connectToMongoDB()
  app.listen(env.PORT, () => {
    console.log(`Servidor corriendo en ${env.PORT}`)
  })
} catch (error) {
    console.error("Error al levantar el servidor")
}
