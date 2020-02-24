import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}

  async getTasks(
    filterDTO: GetTasksFilterDTO,
    user: User
  ): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterDTO, user)
  }

  async getTaskById(
    id: number,
    user: User
  ): Promise<Task> {
    const found = await this.taskRepository.findOne(
      { where: { id: id, userId: user.id }}
    )
    console.log('userId', user.id)
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not exists`)
    }
    return found
  }

  async createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDTO, user)
  }

  async deleteTask(id: number): Promise<void> {
    const { affected } = await this.taskRepository.delete(id)

    if (affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not exists`)
    }
  }

  async updateTaskStatus(
    id: number,
    status: TaskStatus,
    user: User
  ): Promise<Task> {
    const task = await this.getTaskById(id, user)
    task.status = status
    await task.save()
    return task
  }
}
