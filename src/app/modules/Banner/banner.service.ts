import { Types } from 'mongoose'
import { Product } from '../Product/product.model'
import { TBanner } from './banner.interface'
import { Banner } from './banner.model'
import AppError from '../../errors/AppError'

const setBannerInToDB = async (productID: string) => {
  // Find the product by ID
  const isExistProduct = await Product.findById(productID)

  if (!isExistProduct) {
    throw new AppError(400, 'Product not found')
  }

  // Extract the first image (or choose a default if empty)
  const bannerImage = isExistProduct.image?.[0]?.img || ''

  if (!bannerImage) {
    throw new AppError(404, 'No image available for banner')
  }

  // Check if a banner already exists for this product
  const existingBanner = await Banner.findOne({ productID })

  if (existingBanner) {
    throw new AppError(404, 'Already exist the banner!')
  }

  // If no banner exists, create a new one
  const newBanner: TBanner = {
    productID: new Types.ObjectId(productID),
    img: bannerImage,
  }

  const result = await Banner.create(newBanner)

  return result
}

const getBanner = async () => {
  const result = await Banner.find({})
  return result
}

const removeBannerInToDB = async (id: string) => {
  const result = await Banner.findByIdAndDelete(id)
  return result
}

export const BannerServices = {
  setBannerInToDB,
  getBanner,removeBannerInToDB
}
