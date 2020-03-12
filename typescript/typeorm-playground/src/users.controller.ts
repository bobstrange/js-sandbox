import "reflect-metadata";
import { Controller, Get, Post, Param, Body } from "routing-controllers"
import { getConnection } from "typeorm"
import { User } from "./entity/User"
import { UserService } from "./user.service"
import { CreateUserDto } from "./dto/create-user.dto"

@Controller('/users')
export class UsersController {
  private userService: UserService

  constructor() {
    this.userService = new UserService(getConnection().getRepository(User))
  }

  @Get('/')
  async fetchAll() {
    return await this.userService.fetchUsers()
  }

  @Get('/:id')
  async findOne(@Param('id') id) {
    return await this.userService.findUser(id)
  }

  @Post('/')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(`DTO:`, createUserDto)
    return await this.userService.createUser(createUserDto)
  }
}
