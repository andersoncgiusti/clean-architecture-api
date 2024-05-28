import { User } from '../../entities/User'

export class UserPresenter {
  static toResponse(user: User): User {
    return {
      id: user.id,
      name: user.name
    }
  }

  static toResponseArray(users: User[]): User[] {
    return users.map((user) => this.toResponse(user))
  }
}
