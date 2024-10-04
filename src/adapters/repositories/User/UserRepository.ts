import User, { IUser } from '../../../frameworks/model/entities/User/UserEntity'

export interface IUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser>
  getUsers(): Promise<IUser[]>
  getUserById(userId: string): Promise<IUser | null>
  putUserById(userId: string, userData: Partial<IUser>): Promise<IUser | null>
  deleteUserById(userId: string): Promise<IUser | null>
}

export class UserRepository implements IUserRepository {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData)
    return user.save()
  }

  async getUsers(): Promise<IUser[]> {
    return User.find().exec()
  }

  async getUserById(userId: string): Promise<IUser | null> {
    return User.findById(userId).exec()
  }

  async putUserById(
    userId: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    return User.findByIdAndUpdate(userId, userData).exec()
  }

  async deleteUserById(userId: string): Promise<IUser | null> {
    return User.findByIdAndDelete(userId).exec()
  }
}
