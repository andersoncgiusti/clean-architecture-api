import { User } from '@/entities/User/User.entity'
import { CreateUserUseCase } from '@/useCases/User/CreateUserUseCaseImp'
import { GetUserUseCaseImp } from '@/useCases/User/GetUserUseCaseImp'
import { PutUserUseCaseImp } from '@/useCases/User/PutUserUseCaseImp'
import { DeleteUserUseCaseImp } from '@/useCases/User/DeleteUserUseCaseImp'
import { UserRepository } from '@/adapters/repositories/User/UserRepository'

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
    const getUserUseCaseId = new GetUserUseCaseImp(this.userRepository)
    return getUserUseCaseId.execute(userId)
  }

  async putUserById(
    userId: string,
    userData: Partial<User>
  ): Promise<User | null> {
    const putUserUseCase = new PutUserUseCaseImp(this.userRepository)
    return putUserUseCase.execute(userId, userData)
  }

  async deleteUserById(userId: string): Promise<User | null> {
    const deleteUserUseCase = new DeleteUserUseCaseImp(this.userRepository)
    return deleteUserUseCase.execute(userId)
  }
}
