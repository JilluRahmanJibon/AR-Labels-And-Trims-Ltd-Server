import fs from 'fs'
import path from 'path'

// Define the upload directory
const uploadDir = '/home/arltyszb/public_html/uploads'

export const saveImageToHosting = async (
  file: Express.Multer.File,
): Promise<string> => {
  console.log('Starting upload process...')
  console.log('Upload directory:', uploadDir)
  console.log('Received file:', file)

  return new Promise((resolve, reject) => {
    try {
      // Ensure the upload directory exists
      if (!fs.existsSync(uploadDir)) {
        console.log('Upload directory does not exist, creating...')
        fs.mkdirSync(uploadDir, { recursive: true })
      }

      // Correct path join with forward slashes
      const savePath = path.posix.join(uploadDir, file.originalname) // <-- Ensuring POSIX path for Linux
      console.log('Saving file to:', savePath)

      // Write the file using buffer
      fs.writeFile(savePath, file.buffer, (error) => {
        if (error) {
          console.error('Error saving file:', error)
          return reject(error)
        }

        fs.access(savePath, fs.constants.F_OK, (err) => {
          if (err) {
            console.error('File does not exist after save attempt')
            return reject(err)
          }

          console.log('File exists after save attempt')
          resolve(`/uploads/${file.originalname}`)
        })
      })
    } catch (error) {
      console.error('Unexpected error occurred:', error)
      reject(error)
    }
  })
}
