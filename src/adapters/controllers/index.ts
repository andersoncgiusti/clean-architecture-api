import { Application } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'
import { IUserRepository } from '../repositories/User/UserRepository'

export default (app: Application, userRepository: IUserRepository) => {
  const controllersPath = __dirname

  readdirSync(controllersPath)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .forEach(async (file) => {
      const controller = await import(join(controllersPath, file))
      if (typeof controller.default === 'function') {
        controller.default(app, userRepository)
      }
    })
}
