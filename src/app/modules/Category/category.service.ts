import { Product } from "../Product/product.model"

const getCategoryFromDB = async () => {
    const result = await Product.find().select({title:1})
    return result
}

export const CategoryService = {getCategoryFromDB}