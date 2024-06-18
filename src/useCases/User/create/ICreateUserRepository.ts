import { IUser } from '../../../frameworks/typeorm/entities/User/UserEntity'

export interface ICreateUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser>
}
