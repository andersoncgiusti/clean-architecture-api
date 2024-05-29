import { User } from '@/entities/User'
import { CreateUserUseCase } from '@/useCases/User/create/CreateUserUseCase'
import { GetUserUseCase } from '@/useCases/User/get/GetUserUseCase'
import { PutUserUseCase } from '@/useCases/User/put/PutUserUseCase'
import { DeleteUserUseCase } from '@/useCases/User/delete/DeleteUserUseCase'
import { UserRepository } from '@/adapters/repositories/UserRepository'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const createUserUseCase = new CreateUserUseCase(this.userRepository)
    return createUserUseCase.execute(userData)
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers()
  }

  async getUserById(userId: string): Promise<User | null> {
    const getUserUseCaseId = new GetUserUseCase(this.userRepository)
    return getUserUseCaseId.execute(userId)
  }

  async putUserById(
    userId: string,
    userData: Partial<User>
  ): Promise<User | null> {
    const putUserUseCase = new PutUserUseCase(this.userRepository)
    return putUserUseCase.execute(userId, userData)
  }

  async deleteUserById(userId: string): Promise<User | null> {
    const deleteUserUseCase = new DeleteUserUseCase(this.userRepository)
    return deleteUserUseCase.execute(userId)
  }
}
