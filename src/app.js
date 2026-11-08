import express from 'express'
import healthRouter from './routes/health.router.js'
import eventsRouter from './routes/events.router.js'
import sessionRouter from './routes/sessions.router.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())


//Routes
app.use('/api/health', healthRouter)
app.use('/api/events', eventsRouter)
app.use('/api/sessions', sessionRouter)

export default app
