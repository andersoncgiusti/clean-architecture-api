import { IUser } from '../../../frameworks/typeorm/entities/User/UserEntity'

export interface IDeletetUserRepository {
  deleteUserById(userId: string): Promise<IUser | null>
}
