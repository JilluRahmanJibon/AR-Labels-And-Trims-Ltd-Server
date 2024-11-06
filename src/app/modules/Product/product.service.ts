import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

const getAllProductsFromDB = async () => {
  const result = await Product.find()
  return result
}
const getProductsCategoryFromDB = async () => {
  
    try {
    const result = await Product.find({})
      return result
    } catch (error) {
      console.error('Error fetching product categories:', error)
      throw error // This will propagate the error to `catchAsync`
    }
}

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const ProductServices = {
  createProductIntoDB,
  getProductsCategoryFromDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
}
