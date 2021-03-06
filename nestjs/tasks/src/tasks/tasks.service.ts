import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto

  //   let tasks = this.getAllTasks()

  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status)
  //   }

  //   if (search) {
  //     tasks = tasks.filter(task => {
  //       return task.title.includes(search) ||
  //              task.description.includes(search)
  //     })
  //   }
  //   return tasks
  // }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id)
    if (!task) {
      throw new NotFoundException()
    }
    return task
  }

  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id)
  //   this.tasks = this.tasks.filter(task => task.id !== found.id)
  // }

  // updateTaskStatue(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id)
  //   task.status = status
  //   return task
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   }
  //   this.tasks.push(task)
  //   return task
  // }
}
