import { User } from '../../entities/User'
import { IGetUserRepository } from './IGetUserRepository'

export class GetUserUseCase {
  constructor(private readonly userRepository: IGetUserRepository) {}

  async execute(userId: number): Promise<User | null> {
    return this.userRepository.getUserById(userId)
  }
}
