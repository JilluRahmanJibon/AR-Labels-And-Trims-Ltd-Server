import fs from 'fs'
import multer from 'multer'

export const sendImageToCloudinary = (imageName: string, path: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(path, { public_id: imageName.trim() }, (error, result) => {
        if (error) {
          reject(error)
        }
        if (result) {
          resolve(result)
        }
      })
      .finally(() => {
        // Delete a file asynchronously after upload
        fs.unlink(path, (err) => {
          if (err) {
            console.error('Error deleting file:', err)
          } else {
            console.log('File is deleted.')
          }
        })
      })
  })
}

// Function to handle multiple image uploads
export const sendMultipleImagesToCloudinary = (
  images: { name: string; path: string }[],
) => {
  return Promise.all(
    images.map((image) => sendImageToCloudinary(image.name, image.path)),
  )
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + '/uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  },
})

// Multer upload configuration for single and multiple images
export const uploadSingle = multer({ storage })
export const uploadMultiple = multer({ storage })
