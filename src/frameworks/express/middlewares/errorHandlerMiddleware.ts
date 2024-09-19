import logger from '../../../shared/logger/logger'
import { Request, Response, NextFunction } from 'express'

export function errorHandlerMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error('Error caught by errorHandlerMiddleware:', error)

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  res.status(statusCode).json({
    Status: statusCode,
    Message: error.message,
    Endpoint: req.url,
    Method: req.method,
    Results: null
  })
}
