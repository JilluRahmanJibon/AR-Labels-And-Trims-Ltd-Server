import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CategoryService } from './category.service'

const getCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getCategoryFromDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Category retrieved successfully',
    data: result,
  })
})

export const CategoryController ={getCategory}