import { User } from '../../entities/User'

const users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
]

export interface IUserRepository {
  getUsers(): User[]
}

export class UserRepository implements IUserRepository {
  getUsers(): User[] {
    return users
  }

  getUserById(userId: number): User | null {
    return users.find((user) => user.id === userId) || null
  }
}
