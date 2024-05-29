import { IUser } from '../../../frameworks/typeorm/entities/UserEntity'

export interface ICreateUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser>
}
