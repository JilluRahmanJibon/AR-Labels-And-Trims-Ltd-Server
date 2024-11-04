import { TUser } from './user.interface'
import { User } from './user.model'

const createUserInToDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}
const getMe = async (userEmail: string, role: string) => {
  let result = null
  
  if (role ) {
    result = await User.findOne({ email: userEmail ,role})
  }


  return result
}


export const UserServices = {
  createUserInToDB,getMe
}
