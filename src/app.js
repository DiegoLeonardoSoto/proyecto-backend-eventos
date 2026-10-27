import express from 'express'
import healthRouter from './routes/health.router.js'
import eventsRouter from './routes/events.router.js'
import sessionRouter from './routes/sessions.router.js'

const app = express()

app.use(express.json())

//Routes
app.use('/api/health', healthRouter)
app.use('/api/events', eventsRouter)
app.use('/api/sessions', sessionRouter)

export default app
