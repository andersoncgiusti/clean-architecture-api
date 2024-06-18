import logger from './logger'
import { Request, Response, NextFunction } from 'express'

export function customLogger(req: Request, res: Response, next: NextFunction) {
  const method = req.method
  const route = req.originalUrl

  let statusCode: number

  res.on('finish', () => {
    statusCode = res.statusCode
    const logMessage = `method: ${method} ${route} - Status: ${statusCode}`
    logger.info(logMessage)
  })

  next()
}
