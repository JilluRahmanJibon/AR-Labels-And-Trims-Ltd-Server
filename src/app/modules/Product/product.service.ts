import {
  sendImageToCloudinary,
  sendMultipleImagesToCloudinary,
} from '../../utils/sendImageToCloudinary'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (files: any, payload: TProduct) => {
  const images = files.map((file: Express.Multer.File) => ({
    name: file.filename,
    path: file.path,
  }))
  try {
    if (images) {
      const res = await sendMultipleImagesToCloudinary(images)
      payload.image = res.map((image) => ({ img: image.secure_url }))
      const result = await Product.create(payload)
      return result
    }
  } catch (err) {
    console.log('what is the problem',err)
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
