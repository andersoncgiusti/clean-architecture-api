import { IUser } from '../../../frameworks/typeorm/entities/User/UserEntity'

export interface IPutUserRepository {
  putUserById(userId: string, userData: Partial<IUser>): Promise<IUser | null>
}
