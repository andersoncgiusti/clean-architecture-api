import { IUser } from '../../../frameworks/model/entities/User/UserEntity'

export interface ICreateUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser>
}
