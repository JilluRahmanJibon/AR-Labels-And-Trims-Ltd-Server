import { Model } from 'mongoose'
import { USER_ROLE } from '../user/user.constant'

export interface TUser {
  email: string
  password: string
  role: 'superAdmin' | 'admin' | 'user'
  status: 'in-progress' | 'blocked'
  isDeleted: boolean
}

export interface UserModel extends Model<TUser> {
  // instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE
