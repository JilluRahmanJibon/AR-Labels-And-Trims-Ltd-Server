import { Router } from 'express'
import auth from '../../middlewares/auth'
import { ProductControllers } from './product.controller'

const router = Router()

router.post(
  '/create-product',
  auth('superAdmin'),
  ProductControllers.createProduct,
)
router.delete('/:id', auth('superAdmin'), ProductControllers.deleteProduct)
router.get('/:id', ProductControllers.getSingleProduct)
router.get('/', ProductControllers.getAllProducts)

// router.get('/:title', ProductControllers.getProductsCategory)

export const ProductRoutes = router
