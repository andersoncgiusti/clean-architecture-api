import { IUser } from '../../../frameworks/model/entities/User/UserEntity'

export interface IGetUserRepository {
  getUserById(userId: string): Promise<IUser | null>
  getUsers(): Promise<IUser[]>
}
