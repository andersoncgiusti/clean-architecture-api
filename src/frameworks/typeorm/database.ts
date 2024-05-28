import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import logger from '../../shared/logger'

dotenv.config()

const connectDB = async () => {
  try {
    const options: ConnectOptions = {}

    await mongoose.connect(process.env.DATABASE_STRING, options)
    logger.info('Successfully connected to database')
  } catch (error) {
    logger.error('Failed to connect to database:', error)
  }
}

export default connectDB
