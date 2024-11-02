import config from '../config'
import { USER_ROLE } from '../modules/user/user.constant'
import { User } from '../modules/user/user.model'

const superUser = {
  email: 'jillurahmanjibon@gmail.com',
  password: config.super_admin_password,
  role: USER_ROLE.superAdmin,
  status: 'in-progress',
  isDeleted: false,
}

const seedSuperAdmin = async () => {
  // when database is connected, we will check is there any super admin is exist
  const isSuerAdminExists = await User.findOne({ role: USER_ROLE.superAdmin })
  if (!isSuerAdminExists) {
    await User.create(superUser)
  }
}

export default seedSuperAdmin
