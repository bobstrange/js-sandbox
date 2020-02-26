import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'

describe('User entity', () => {
  let user: User

  beforeEach(() => {
    user = new User()
    user.salt = 'testSalt'
    user.password = 'testPassword'
    bcrypt.hash = jest.fn()
  })

  describe('validatePassword', () => {
    it('returns true as password is valid', async () => {
      bcrypt.hash.mockResolvedValue('testPassword')
      expect(bcrypt.hash).not.toHaveBeenCalled()
      const result = await user.validatePassword('123456')
      expect(bcrypt.hash).toHaveBeenCalledWith('123456', 'testSalt')
      expect(result).toBeTruthy()
    })

    it('returns false as password is invalid', async() => {
      bcrypt.hash.mockResolvedValue('invalidPassword')
      expect(bcrypt.hash).not.toHaveBeenCalled()
      const result = await user.validatePassword('123456')
      expect(bcrypt.hash).toHaveBeenCalledWith('123456', 'testSalt')
      expect(result).toBeFalsy()
    })
  })
})
