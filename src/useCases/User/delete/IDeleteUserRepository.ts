import { IUser } from '../../../frameworks/typeorm/entities/UserEntity'

export interface IDeletetUserRepository {
  deleteUserById(userId: string): Promise<IUser | null>
}
