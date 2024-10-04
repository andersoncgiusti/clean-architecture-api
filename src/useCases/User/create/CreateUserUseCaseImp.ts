import { IUser } from '../../../frameworks/model/entities/User/UserEntity'
import { UserRepository } from '../../../adapters/repositories/User/UserRepository'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: Partial<IUser>): Promise<IUser> {
    return this.userRepository.createUser(userData)
  }
}
