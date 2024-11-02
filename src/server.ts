import { Server } from 'http'
import mongoose from 'mongoose'
import config from './app/config'
import app from './app'
import seedSuperAdmin from './app/DB'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    seedSuperAdmin()
    server = app.listen(config.port, () => {
      console.log(`AR-Labels app is listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()

process.on('unhandledRejection', (err) => {
  console.log(`UnHandleRejection is detected, shutting down ...`, err)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
})

process.on('uncaughtException', () => {
  console.log(`uncaughtException is detected, shutting down ...`)
  process.exit(1)
})
