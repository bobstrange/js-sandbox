import { Test } from "@nestjs/testing";
import { UserRepository } from "./user.repository";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

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
      save.mockRejectedValue({ code: '12345' })
      expect(userRepository.signUp(mockCreadentialsDTO)).rejects.toThrow(InternalServerErrorException)
    })
  })
})
