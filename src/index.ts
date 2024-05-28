/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */
import app from './frameworks/express/server'
import portfinder from 'portfinder'
import connectDB from './frameworks/typeorm/database'
import logger from './shared/logger'

(async () => {
  try {
    await connectDB()

    const port = await portfinder
      .getPortPromise({ port: 3000 })
      .catch((error) => {
        throw new Error(`Failed to get port: ${error}`)
      })

    app.listen(port, () => {
      logger.info(`Server online at url http://localhost:${port}`)
      logger.info(`Document online at url http://localhost:${port}/api-docs`)
    })
  } catch (error) {
    logger.error('Failed to start server:', error)
  }
})()
