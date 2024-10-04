import { User } from '@/entities/User/User.entity'

export class UserPresenter {
  static toResponse(user: User): User {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      permission: user.permission
    }
  }

  static toResponseArray(users: User[]): User[] {
    return users.map((user) => this.toResponse(user))
  }
}
