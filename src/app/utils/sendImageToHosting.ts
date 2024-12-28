import fs from 'fs'
import path from 'path'

// Set your upload directory (use double backslashes for Windows path)
const uploadDir = '/home/arltyszb/public_html/web-cms-arltl/uploads'

export const saveImagesToHosting = async (
  files: Express.Multer.File[],
): Promise<{ img: string; fileName: string }[]> => {
  const fileDetails: { img: string; fileName: string }[] = [] // Array to store image details

  for (const file of files) {
    try {
      // Ensure the upload directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }

      // Sanitize the file name by replacing spaces with hyphens
      let sanitizedFileName = file.originalname.replace(/\s+/g, '-')

      // Define the initial file path
      let savePath = path.join(uploadDir, sanitizedFileName)
      let fileName = sanitizedFileName
      let counter = 1

      // Check if directory is writable
      try {
        fs.accessSync(uploadDir, fs.constants.W_OK)
      } catch (err) {
        console.error('Directory is not writable:', err)
        throw new Error('Directory is not writable')
      }

      // Check if the file already exists and add a numeric suffix if necessary
      while (fs.existsSync(savePath)) {
        const extname = path.extname(sanitizedFileName)
        const basename = path.basename(sanitizedFileName, extname)
        fileName = `${basename}-${counter}${extname}`
        savePath = path.join(uploadDir, fileName)
        counter++
      }

      // Save the file to the server
      fs.writeFileSync(savePath, file.buffer)

      // Construct the full URL of the saved file
      const fullUrl = `https://www.arltl.com/web-cms-arltl/uploads/${fileName}`

      // Add the file details to the array
      fileDetails.push({ img: fullUrl, fileName })
    } catch (error) {
      console.error('Error during file save process:', error)
    }
  }

  return fileDetails // Return the array of file detail objects
}
