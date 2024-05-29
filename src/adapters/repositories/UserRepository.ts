import User, { IUser } from '../../frameworks/typeorm/entities/UserEntity'

export interface IUserRepository {
  getUsers(): Promise<IUser[]>
  getUserById(userId: string): Promise<IUser | null>
  createUser(userData: Partial<IUser>): Promise<IUser>
}

export class UserRepository implements IUserRepository {
  async getUsers(): Promise<IUser[]> {
    return User.find().exec()
  }

  async getUserById(userId: string): Promise<IUser | null> {
    return User.findById(userId).exec()
  }

  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData)
    return user.save()
  }
}
