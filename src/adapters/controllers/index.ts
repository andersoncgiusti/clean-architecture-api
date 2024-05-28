import { Application } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Application) => {
  const controllersPath = __dirname

  readdirSync(controllersPath)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .forEach(async (file) => {
      const controller = await import(join(controllersPath, file))
      if (typeof controller.default === 'function') {
        controller.default(app)
      }
    })
}
