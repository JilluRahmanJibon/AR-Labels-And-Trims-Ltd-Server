import { Router } from 'express'
import { BannerControllers } from './banner.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post('/set/:id', auth(USER_ROLE.superAdmin), BannerControllers.setBanner)
router.delete('/remove/:id', auth(USER_ROLE.superAdmin), BannerControllers.removeBanner)
router.get('/', BannerControllers.getBanner)

export const BannerRoutes = router
