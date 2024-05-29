import { User } from '../entities/User'
import { GetUserUseCase } from '../useCases/User/get/GetUserUseCase'
import { IGetUserRepository } from '../useCases/User/get/IGetUserRepository'

export class UserService {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async getUserById(userId: number): Promise<User | null> {
    const getUserUseCase = new GetUserUseCase(this.getUserRepository)
    return getUserUseCase.execute(userId)
  }

  async getUsers(): Promise<User[] | null> {
    return this.getUserRepository.getUsers()
  }
}
