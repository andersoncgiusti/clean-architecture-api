import { IUser } from '../../../frameworks/typeorm/entities/User/UserEntity'
import { UserRepository } from '../../../adapters/repositories/UserRepository'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: Partial<IUser>): Promise<IUser> {
    return this.userRepository.createUser(userData)
  }
}
