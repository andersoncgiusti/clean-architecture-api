import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import specs from '../../swagger'
import registerControllers from '../../adapters/controllers'
import { UserRepository } from '../../adapters/repositories/User/UserRepository'
import { customLogger } from '../../shared/logger/customLogger'

const app: Application = express()
const userRepository = new UserRepository()

app.use(customLogger)

app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem indicando que o servidor está em execução
 *     responses:
 *       '200':
 *         description: Mensagem de sucesso
 */
app.get('/', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Server is Running' })
})

/**
 * @swagger
 * /health/ping:
 *   get:
 *     summary: Verifica se o servidor está respondendo corretamente
 *     responses:
 *       '201':
 *         description: Mensagem de sucesso
 */
app.get('/health/ping', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Check OK' })
})

registerControllers(app, userRepository)

export default app
