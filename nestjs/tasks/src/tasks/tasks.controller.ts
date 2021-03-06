import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  // @Get()
  // getTasks(@Query(new ValidationPipe()) filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto)
  //   }
  //   return this.tasksService.getAllTasks()
  // }

  @Get('/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Task> {
    return this.tasksService.getTaskById(id)
  }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', new TaskStatusValidationPipe()) status: TaskStatus
  // ): Task {
  //   return this.tasksService.updateTaskStatue(id, status)
  // }

  // @Delete('/:id')
  // deleteTaskById(
  //   @Param('id') id: string
  // ): void {
  //   this.deleteTaskById(id)
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(
  //   @Body() createTaskDto: CreateTaskDto
  // ): Task {
  //   return this.tasksService.createTask(createTaskDto)
  // }
}
