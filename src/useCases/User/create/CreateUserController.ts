import { User } from '../../../entities/User'
import { IGetUserRepository } from './IGetUserRepository'

export class GetUserController {
  constructor(private readonly userRepository: IGetUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getUsers()
  }
}
