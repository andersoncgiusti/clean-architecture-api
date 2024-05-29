import { Application, Request, Response } from 'express'
import { UserRepository } from '../../../adapters/repositories/UserRepository'
import { UserPresenter } from '../../../adapters/presenters/UserPresenter'

export default (app: Application, userRepository: UserRepository) => {
  app.get('/api/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const user = await userRepository.getUserById(Number(id))
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
      const users = userRepository.getUsers()
      res.json(UserPresenter.toResponseArray(users))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}
