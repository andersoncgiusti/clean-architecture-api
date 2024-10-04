import { IUser } from '../../../frameworks/model/entities/User/UserEntity'

export interface IPutUserRepository {
  putUserById(userId: string, userData: Partial<IUser>): Promise<IUser | null>
}
