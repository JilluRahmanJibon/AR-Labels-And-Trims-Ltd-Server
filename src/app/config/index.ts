import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds:process.env.BCRYPT_SALT_ROUNDS
}
