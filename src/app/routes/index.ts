import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/Auth/auth.route'
import { ProductRoutes } from '../modules/Product/product.route'
import { CategoryRoutes } from '../modules/Category/category.route'

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
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
