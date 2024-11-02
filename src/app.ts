import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'



const app: Application = express()

// parser 
app.use(express.json())

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

    

// application routes 
app.use('/api/v1', router)


export default app