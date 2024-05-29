import { Request, Response } from 'express'
import { UserService } from '../../../services/UserService'
import { UserPresenter } from '../../../adapters/presenters/UserPresenter'

export class CreateUserController {
  constructor(private readonly userService: UserService) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.createUser(req.body)
      res.status(201).json(UserPresenter.toResponse(user))
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
