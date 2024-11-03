import { NextFunction, Request, Response } from 'express'


const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  })
}

export default notFound
