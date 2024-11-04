import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const createUser = catchAsync(async (req, res) => {
  const data = req.body
  const result = await UserServices.createUserInToDB(data)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User is created successfully',
    data: result,
  })
})

const getMe = catchAsync(async (req, res) => {
  const { userEmail, role } = req.user
   
  const result = await UserServices.getMe(userEmail, role)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getMe,
}
