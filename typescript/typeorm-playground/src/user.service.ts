import { User } from "./entity/User"
import { Repository } from "typeorm"
import { CreateUserDto } from "./dto/create-user.dto"

export class UserService {
  constructor(private userRepository: Repository<User>) {}

  async fetchUsers(): Promise<User[]> {
    const users = await this.userRepository.find()
    return users
  }

  async findUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ id })

    if (!user) {
      throw Error(`User id: ${id} not found`)
    }
    return user
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(createUserDto)
    const result = await this.userRepository.save(user)
    return result
  }
}
