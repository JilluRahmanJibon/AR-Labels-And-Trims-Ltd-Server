import { Types } from 'mongoose'

export type TPreRequisiteImages = {
  img: string
}

export type TProduct = {
  title: string
  description: string
  image: [TPreRequisiteImages]
}
