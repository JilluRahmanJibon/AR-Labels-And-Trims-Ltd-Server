import { model, Schema } from 'mongoose'
import { TBanner } from './banner.interface'

const bannerSchema = new Schema<TBanner>({
  productID: {
    type: Schema.ObjectId,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
})

export const Banner = model<TBanner>('Banner', bannerSchema)
