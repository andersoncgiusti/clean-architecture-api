import { Application, Request, Response } from 'express'
import { UserService } from '@/services/UserService'
import { UserPresenter } from '../../presenters/User/UserPresenter'

export default (app: Application, userService: UserService) => {
  /**
   * @swagger
   * /api/users:
   *   post:
   *     summary: Cria um novo usuário
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *     responses:
   *       '201':
   *         description: Mensagem de sucesso
   */
  app.post('/api/users', async (req: Request, res: Response) => {
    try {
      const user = await userService.createUser(req.body)
      res.status(201).json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

  /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Busca todos os usuários cadastrados
   *     responses:
   *       '200':
   *         description: Mensagem de sucesso
   */
  app.get('/api/users', async (req: Request, res: Response) => {
    try {
      const users = await userService.getUsers()
      if (!users || users.length === 0) {
        return res.status(404).json({ error: 'No users found' })
      }
      res.json(UserPresenter.toResponseArray(users))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

  /**
   * @swagger
   * /api/users/{id}:
   *   get:
   *     summary: Verifica se existe usuário com o ID informado
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do usuário a ser consultado
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Mensagem de sucesso
   */
  app.get('/api/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const user = await userService.getUserById(id)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

  /**
   * @swagger
   * /api/users/{id}:
   *   put:
   *     summary: Atualiza informações do usuário com o ID informado
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do usuário a ser atualizado
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Mensagem de sucesso
   */
  app.put('/api/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const user = await userService.putUserById(id, req.body)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(UserPresenter.toResponse(req.body))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

  /**
   * @swagger
   * /api/users/{id}:
   *   delete:
   *     summary: Deleta usuário com o ID informado
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do usuário a ser deletado
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: Mensagem de sucesso
   */
  app.delete('/api/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const user = await userService.deleteUserById(id)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}
