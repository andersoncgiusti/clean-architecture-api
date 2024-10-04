import { IUser } from '../../../frameworks/model/entities/User/UserEntity'

export interface IDeletetUserRepository {
  deleteUserById(userId: string): Promise<IUser | null>
}
