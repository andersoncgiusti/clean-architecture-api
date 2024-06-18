import { IUser } from '../../../frameworks/typeorm/entities/User/UserEntity'
import { UserRepository } from '../../../adapters/repositories/User/UserRepository'

export class PutUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    userId: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    return this.userRepository.putUserById(userId, userData)
  }
}
