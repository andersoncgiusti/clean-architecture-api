import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import specs from '../../swagger'

const app: Application = express()

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
 *       '200':
 *         description: Mensagem de sucesso
 */
app.get('/health/ping', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Check OK' })
})

export default app
