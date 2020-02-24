import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks
  // }

  // getTasksWithFilters(getTasksFilterDTO: GetTasksFilterDTO): Task[] {
  //   const { status, search } = getTasksFilterDTO
  //   let tasks = this.getAllTasks()
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status)
  //   }
  //   if (search) {
  //     tasks = tasks.filter(task => {
  //       return task.title.includes(search) ||
  //         task.description.includes(search)
  //     })
  //   }
  //   return tasks
  // }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id)
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not exists`)
    }
    return found
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.taskRepository.createTask(createTaskDTO)
  }

  async deleteTask(id: number): Promise<void> {
    const { affected } = await this.taskRepository.delete(id)

    if (affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not exists`)
    }
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id)
  //   task.status = status
  //   return task
  // }
}
