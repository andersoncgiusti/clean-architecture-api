import { IUser } from '../../frameworks/model/entities/User/UserEntity'
import { UserRepository } from '../../adapters/repositories/User/UserRepository'

export class GetUserUseCaseImp {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<IUser | null> {
    return this.userRepository.getUserById(userId)
  }
}
