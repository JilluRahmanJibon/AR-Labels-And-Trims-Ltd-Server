import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import AppError from '../errors/AppError'
import { TUserRole } from '../modules/user/user.interface'
import { User } from '../modules/user/user.model'
import catchAsync from '../utils/catchAsync'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    // checking if the token is missing
    if (!token) {
      throw new AppError(403, 'You are not authorized!')
    }

    // checking if the given token is valid
    let decoded
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload
    } catch (err) {
      throw new AppError(401, 'Unauthorized')
    }
    const { role, userEmail, iat } = decoded

    
    // checking if the user is exist
    const user = await User.isUserExistsByEmail(userEmail)


    if (!user) {
      throw new AppError(404, 'This user is not found !')
    }
    // checking if the user is already deleted

    const isDeleted = user?.isDeleted

    if (isDeleted) {
      throw new AppError(404, 'This user is deleted !')
    }

    // checking if the user is blocked
    const userStatus = user?.status

    if (userStatus === 'blocked') {
      throw new AppError(404, 'This user is blocked ! !')
    }

    if (
      user.passwordChangedAt &&
      User.isJWTIssuedBeforePasswordChanged(
        user.passwordChangedAt,
        iat as number,
      )
    ) {
      throw new AppError(403, 'You are not authorized !')
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(403, 'You are not authorized  hi!')
    }

    req.user = decoded as JwtPayload & { role: string }
    next()
  })
}

export default auth
