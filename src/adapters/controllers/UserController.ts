import { Application, Request, Response } from 'express'
import { UserService } from '../../services/UserService'
import { UserPresenter } from '../presenters/UserPresenter'

export default (app: Application, userService: UserService) => {
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

  app.post('/api/users', async (req: Request, res: Response) => {
    try {
      const user = await userService.createUser(req.body)
      res.status(201).json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}
