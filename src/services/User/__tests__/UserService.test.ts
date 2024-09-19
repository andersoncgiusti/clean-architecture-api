import { UserService } from '@/services/User/UserService'
import { UserRepository } from '@/adapters/repositories/User/UserRepository'
import { User } from '@/entities/User/User.entity'

jest.mock('@/adapters/repositories/User/UserRepository')

describe('UserService', () => {
  let userService: UserService
  let userRepository: jest.Mocked<UserRepository>

  beforeEach(() => {
    userRepository = new UserRepository() as jest.Mocked<UserRepository>
    userService = new UserService(userRepository)
  })

  it('should create a user', async () => {
    const user: User = { name: 'John Doe' }
    userRepository.createUser.mockResolvedValue(user)

    const result = await userService.createUser(user)
    expect(result).toEqual(user)
    expect(userRepository.createUser).toHaveBeenCalledWith(user)
  })
})
