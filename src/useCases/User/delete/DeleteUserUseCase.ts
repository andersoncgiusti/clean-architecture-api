import { IUser } from '../../../frameworks/typeorm/entities/UserEntity'
import { UserRepository } from '../../../adapters/repositories/UserRepository'

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<IUser | null> {
    return this.userRepository.deleteUserById(userId)
  }
}
