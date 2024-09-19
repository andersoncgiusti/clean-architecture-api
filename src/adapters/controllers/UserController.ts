import { Application, Request, Response } from 'express'
import { UserService } from '@/services/User/UserService'
import { UserPresenter } from '../presenters/User/UserPresenter'

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
    // try {
    //   const user = await userService.createUser(req.body)
    //   res.status(201).json({
    //     Status: res.statusCode,
    //     Message: 'User created successfully',
    //     Endpoint: req.url,
    //     Method: req.method,
    //     Results: UserPresenter.toResponse(user)
    //   })
    // } catch (error) {
    //   res.status(500).json({
    //     Status: res.statusCode,
    //     Message: 'Internal Server Error',
    //     Endpoint: req.url,
    //     Method: req.method,
    //     Results: error.message
    //   })
    // }
    const user = await userService.createUser(req.body)
    res.status(201).json({
      Status: res.statusCode,
      Message: 'User created successfully',
      Endpoint: req.url,
      Method: req.method,
      Results: UserPresenter.toResponse(user)
    })
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
        return res.status(404).json({
          Status: res.statusCode,
          Message: 'No users found',
          Endpoint: req.url,
          Method: req.method,
          Results: users
        })
      }
      res.status(200).json({
        Status: res.statusCode,
        Message: 'Users found successfully',
        Endpoint: req.url,
        Method: req.method,
        Results: UserPresenter.toResponseArray(users)
      })
    } catch (error) {
      res.status(500).json({
        Status: res.statusCode,
        Message: 'Internal Server Error',
        Endpoint: req.url,
        Method: req.method,
        Results: error.message
      })
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
    // const { id } = req.params
    // try {
    //   const user = await userService.getUserById(id)
    //   if (!user) {
    //     return res.status(404).json({
    //       Status: res.statusCode,
    //       Message: 'No users found',
    //       Endpoint: req.url,
    //       Method: req.method,
    //       Results: user
    //     })
    //   }
    //   res.status(200).json({
    //     Status: res.statusCode,
    //     Message: 'User found successfully',
    //     Endpoint: req.url,
    //     Method: req.method,
    //     Results: UserPresenter.toResponse(user)
    //   })
    // } catch (error) {
    //   res.status(500).json({
    //     Status: res.statusCode,
    //     Message: 'Internal Server Error',
    //     Endpoint: req.url,
    //     Method: req.method,
    //     Results: error.message
    //   })
    // }
    const { id } = req.params
    const user = await userService.getUserById(id)
    if (!user) {
      return res.status(404).json({
        Status: res.statusCode,
        Message: 'No users found',
        Endpoint: req.url,
        Method: req.method,
        Results: user
      })
    }
    res.status(200).json({
      Status: res.statusCode,
      Message: 'User found successfully',
      Endpoint: req.url,
      Method: req.method,
      Results: UserPresenter.toResponse(user)
    })
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
        return res.status(404).json({
          Status: res.statusCode,
          Message: 'User not found',
          Endpoint: req.url,
          Method: req.method,
          Results: user
        })
      }
      res.status(201).json({
        Status: res.statusCode,
        Message: 'Users found successfully',
        Endpoint: req.url,
        Method: req.method,
        Results: UserPresenter.toResponse(req.body)
      })
    } catch (error) {
      res.status(500).json({
        Status: res.statusCode,
        Message: 'Internal Server Error',
        Endpoint: req.url,
        Method: req.method,
        Results: error.message
      })
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
        return res.status(404).json({
          Status: res.statusCode,
          Message: 'User not found',
          Endpoint: req.url,
          Method: req.method,
          Results: user
        })
      }
      res.status(201).json({
        Status: res.statusCode,
        Message: 'User deleted successfully',
        Endpoint: req.url,
        Method: req.method,
        Results: UserPresenter.toResponse(user)
      })
    } catch (error) {
      res.status(500).json({
        Status: res.statusCode,
        Message: 'Internal Server Error',
        Endpoint: req.url,
        Method: req.method,
        Results: error.message
      })
    }
  })
}
