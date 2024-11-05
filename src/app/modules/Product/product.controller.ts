import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product is created successfully',
    data: result,
  })
})

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product are retrieved successfully',
    data: result,
  })
})
const getProductsCategory = catchAsync(async (req, res) => {
  const result = await ProductServices.getProductsCategoryFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product Category are retrieved successfully',
    data: result,
  })
})

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.getSingleProductFromDB(id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProductServices.deleteProductFromDB(id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product is deleted successfully',
    data: result,
  })
})

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductsCategory,
  getSingleProduct,
  deleteProduct,
}
