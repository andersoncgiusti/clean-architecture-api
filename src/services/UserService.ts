import { User } from '../entities/User'
import { GetUserUseCase } from '../useCases/User/get/GetUserUseCase'
import { CreateUserUseCase } from '../useCases/User/create/CreateUserUseCase'
import { UserRepository } from '../adapters/repositories/UserRepository'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(userId: string): Promise<User | null> {
    const getUserUseCase = new GetUserUseCase(this.userRepository)
    return getUserUseCase.execute(userId)
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers()
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const createUserUseCase = new CreateUserUseCase(this.userRepository)
    return createUserUseCase.execute(userData)
  }
}
