import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BannerServices } from './banner.service'

const setBanner = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await BannerServices.setBannerInToDB(id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Banner set successfully !',
    data: result,
  })
})
const getBanner = catchAsync(async (req, res) => {
  const result = await BannerServices.getBanner()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Banner retrieved successfully',
    data: result,
  })
})
const removeBanner = catchAsync(async (req, res) => {
  const {id}=req.params
  const result = await BannerServices.removeBannerInToDB(id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Banner remove successfully!',
    data: result,
  })
})

export const BannerControllers = {
  setBanner,
  getBanner,removeBanner
}
