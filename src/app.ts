import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'

const app: Application = express()

// parser
app.use(express.json())

// app.use(cors())
app.use(
  cors({
    // origin: 'https://www.arltl.com',
    credentials: true,
  }),
)

// application routes
app.use('/api/v1', router)

// global error handler
app.use(globalErrorHandler)

// API NOT FOUND
app.use(notFound)

export default app
