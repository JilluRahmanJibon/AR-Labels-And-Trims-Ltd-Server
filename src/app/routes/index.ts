import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/Auth/auth.route'
import { ProductRoutes } from '../modules/Product/product.route'
import { CategoryRoutes } from '../modules/Category/category.route'
import { BannerRoutes } from '../modules/Banner/banner.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/categories',
    route :CategoryRoutes
  },
  {
    path: '/banner',
    route :BannerRoutes
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
