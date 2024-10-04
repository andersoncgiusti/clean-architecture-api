import { IUser } from '../../frameworks/model/entities/User/UserEntity'
import { UserRepository } from '../../adapters/repositories/User/UserRepository'

export class PutUserUseCaseImp {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    userId: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    return this.userRepository.putUserById(userId, userData)
  }
}
