import AppError from '../../errors/AppError'
import { saveImagesToHosting } from '../../utils/sendImageToHosting'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (files: any, payload: TProduct) => {
 
  const isExistProduct = await Product.findOne({ title: payload?.title })
  if (isExistProduct) {
    throw new AppError(400, 'The product is already exist!')
  }

  if (files) {
    const imageUrl = await saveImagesToHosting(files)
    payload.image = imageUrl
    if (payload?.image?.length > 0) {
      const result = await Product.create(payload)
      return result
    }
   throw new AppError(400, 'Please Upload Images!')
  }
}

const getAllProductsFromDB = async () => {
  const result = await Product.find()
  return result
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
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
}
