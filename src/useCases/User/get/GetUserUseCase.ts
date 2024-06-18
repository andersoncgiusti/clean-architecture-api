import { IUser } from '../../../frameworks/typeorm/entities/User/UserEntity'
import { UserRepository } from '../../../adapters/repositories/UserRepository'

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<IUser | null> {
    return this.userRepository.getUserById(userId)
  }
}
