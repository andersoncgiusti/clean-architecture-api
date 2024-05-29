import { Request, Response } from 'express'
import { UserService } from '../../../services/UserService'
import { UserPresenter } from '../../../adapters/presenters/UserPresenter'

export class GetUserController {
  constructor(private readonly userService: UserService) {}

  async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    try {
      const user = await this.userService.getUserById(id)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
