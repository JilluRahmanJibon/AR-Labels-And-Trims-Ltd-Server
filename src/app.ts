import express, { Application } from 'express'
import path from 'path'
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
    origin: [
      'https://arltl.com',
      'https://www.arltl.com',
      'https://server.arltl.com',
      'http://localhost:5173',
    ],
    credentials: true,
  }),
)

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')))

// application routes
app.use('/api/v1', router)

// global error handler
app.use(globalErrorHandler)

// API NOT FOUND
app.use(notFound)

export default app
