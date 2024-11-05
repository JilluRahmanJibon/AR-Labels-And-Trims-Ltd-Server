import { model, Schema } from 'mongoose'
import { TPreRequisiteImages, TProduct } from './product.interface'

const preRequisiteImageSchema = new Schema<TPreRequisiteImages>(
  {
    image: {
      type: String,
    },
  },
  {
    _id: false,
  },
)

const productSchema = new Schema<TProduct>({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  preRequisiteImages: [preRequisiteImageSchema],
})

export const Product = model<TProduct>('Product', productSchema)
