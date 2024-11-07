import { NextFunction, Request, Response, Router } from 'express'
import auth from '../../middlewares/auth'
import { ProductControllers } from './product.controller'
import { uploadMultiple } from '../../utils/sendImageToCloudinary'

const router = Router()

router.post(
  '/create-product',
  auth('superAdmin'),
  uploadMultiple.array('files', 10),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  ProductControllers.createProduct,
)
router.delete('/:id', auth('superAdmin'), ProductControllers.deleteProduct)
router.get('/:id', ProductControllers.getSingleProduct)
router.get('/', ProductControllers.getAllProducts)

export const ProductRoutes = router
