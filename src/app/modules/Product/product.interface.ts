import { Types } from 'mongoose'

export type TPreRequisiteImages = {
  image: string
}

export type TProduct = {
  title: string
  description: string
  preRequisiteImages: [TPreRequisiteImages]
}
