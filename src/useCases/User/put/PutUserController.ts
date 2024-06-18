import { Request, Response } from 'express'
import { UserService } from '../../../services/User/UserService'
import { UserPresenter } from '../../../adapters/presenters/User/UserPresenter'

export class PutUserController {
  constructor(private readonly userService: UserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const user = await this.userService.putUserById(id, req.body)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
