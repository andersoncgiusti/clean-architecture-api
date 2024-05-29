import { IUser } from '../../../frameworks/typeorm/entities/UserEntity'

export interface IGetUserRepository {
  getUserById(userId: string): Promise<IUser | null>
  getUsers(): Promise<IUser[]>
}
