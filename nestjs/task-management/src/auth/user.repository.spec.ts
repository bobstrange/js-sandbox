import { Test } from "@nestjs/testing";
import { UserRepository } from "./user.repository";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { User } from "./user.entity";

const mockCreadentialsDTO = { username: 'test user', password: 'testpassword'}

describe('UserRepository', () => {
  let userRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserRepository]
    }).compile()

    userRepository = await module.get<UserRepository>(UserRepository)
  })

  describe('singUp', () => {
    let save

    beforeEach(() => {
      save = jest.fn()
      userRepository.create = jest.fn().mockReturnValue({ save })
    })

    it('successfully signs up the user', () => {
      save.mockResolvedValue(undefined)
      expect(userRepository.signUp(mockCreadentialsDTO)).resolves.not.toThrow()
    })

    it('throws a ConflictException as username already exists', () => {
      save.mockRejectedValue({ code: '23505' })
      expect(userRepository.signUp(mockCreadentialsDTO)).rejects.toThrow(ConflictException)
    })

    it('throws a InternalServerErrorException', () => {
      save.mockRejectedValue({ code: '12345' }) // Unhandled error code
      expect(userRepository.signUp(mockCreadentialsDTO)).rejects.toThrow(InternalServerErrorException)
    })
  })

  describe('validateUserPassword', () => {
    let user

    beforeEach(() => {
      userRepository.findOne = jest.fn()
      user = new User()
      user.username = 'Test username'
      user.validatePassword = jest.fn()
    })

    it('returns the username as validation is successful', async () => {
      userRepository.findOne.mockResolvedValue(user)
      user.validatePassword.mockResolvedValue(true)

      const result = await userRepository.validateUserPassword(mockCreadentialsDTO)
      expect(result).toEqual('Test username')
    })

    it('returns null as user cannot be found', async () => {
      userRepository.findOne.mockResolvedValue(null)
      const result = await userRepository.validateUserPassword(mockCreadentialsDTO)
      expect(user.validatePassword).not.toHaveBeenCalled()
      expect(result).toBeNull()
    })

    it('returns null as password is invalid', async () => {
      userRepository.findOne.mockResolvedValue(user)
      user.validatePassword.mockResolvedValue(false)
      const result = await userRepository.validateUserPassword(mockCreadentialsDTO)
      expect(user.validatePassword).toHaveBeenCalled()
      expect(result).toBeNull()
    })
  })
})
