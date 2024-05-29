import { User } from '../../../entities/User'

export interface IGetUserRepository {
  getUserById(userId: number): Promise<User | null>
  getUsers(): Promise<User[]>
}
