import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { ProductControllers } from './product.controller'

const router = Router()

router.post(
  '/create-product',
  auth('superAdmin'),
  ProductControllers.createProduct,
)
router.delete('/:id', auth('superAdmin'), ProductControllers.deleteProduct)
router.get('/:id', auth('superAdmin'), ProductControllers.getSingleProduct)
router.post('/', ProductControllers.getAllProducts)



export const ProductRoutes=router