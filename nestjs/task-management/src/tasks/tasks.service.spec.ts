import { Test } from "@nestjs/testing"
import { TasksService } from "./tasks.service"
import { TaskRepository } from "./task.repository"
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto"
import { TaskStatus } from "./task-status.enum"
import { NotFoundException } from "@nestjs/common"
import { CreateTaskDTO } from "./dto/create-task.dto"

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn(),
  createTask: jest.fn(),
  delete: jest.fn()
})

const mockUser = {
  id: 5,
  username: 'Test User'
}

describe('TasksService', () => {
  let tasksService
  let taskRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTaskRepository }
      ]
    }).compile()

    tasksService = await module.get<TasksService>(TasksService)
    taskRepository = await module.get<TaskRepository>(TaskRepository)
  })

  describe('getTasks', () => {
    it('gets all tasks from the repository', async () => {
      taskRepository.getTasks.mockResolvedValue('Some value')
      expect(taskRepository.getTasks).not.toHaveBeenCalled()
      const filters: GetTasksFilterDTO = {
        status: TaskStatus.IN_PROGRESS,
        search: 'Search query'
      }
      const result = await tasksService.getTasks(filters, mockUser)
      expect(taskRepository.getTasks).toHaveBeenCalled()
      expect(result).toEqual('Some value')
    })
  })

  describe('getTaskById', () => {
    it('calls taskRepository.findOne() and successfully return  the task', async () => {
      const mockTask = {
        id: 10,
        title: 'Test task',
        description: 'Test desc'
      }
      taskRepository.findOne.mockResolvedValue(mockTask)
      const result = await tasksService.getTaskById(10, mockUser)
      expect(result).toEqual(mockTask)
      expect(taskRepository.findOne).toHaveBeenCalledWith({
        where: { id: 10, userId: mockUser.id }
      })
    })

    it('throws an error as task is not found', async () => {
      taskRepository.findOne.mockResolvedValue(null)
      expect(tasksService.getTaskById(10, mockUser)).rejects.toThrow(NotFoundException)
    })
  })

  describe('createTask', () => {
    it('calls taskRepository.createTask() and successfully return the task', async () => {
      const createTaskDTO: CreateTaskDTO = {
        title: 'Created',
        description: 'Created desc',
      };
      taskRepository.createTask.mockResolvedValue({
        id: 2,
        ...createTaskDTO,
      });
      expect(taskRepository.createTask).not.toHaveBeenCalled();
      const result = await tasksService.createTask(createTaskDTO, mockUser);
      expect(taskRepository.createTask).toHaveBeenCalled();
      expect(result).toEqual({
        id: 2,
        ...createTaskDTO,
      });
    });
  })

  describe('deleteTask', () => {
    it('calls taskRepository.deleteTask() to delete a task', async () => {
      taskRepository.delete.mockResolvedValue({ affected: 1 })
      expect(taskRepository.delete).not.toHaveBeenCalled()
      await tasksService.deleteTask(1, mockUser)
      expect(taskRepository.delete).toHaveBeenCalledWith({ id: 1, userId: mockUser.id })
    })

    it('throws an error as task could not be found', () => {
      taskRepository.delete.mockResolvedValue({ affected: 0 })
      expect(tasksService.deleteTask(1, mockUser)).rejects.toThrow(NotFoundException)
    })
  })

  describe('updateTaskStatus', () => {
    it('calls this.getTaskById() and task.save(), and returns task', async () => {
      const mockTask = {
        id: 2,
        title: 'Mock task title',
        description: 'Mock task desc',
        status: TaskStatus.OPEN,
        save: jest.fn().mockResolvedValue(true)
      }
      tasksService.getTaskById = jest.fn().mockResolvedValue(mockTask)
      expect(tasksService.getTaskById).not.toHaveBeenCalled()
      expect(mockTask.save).not.toHaveBeenCalled()
      const result = await tasksService.updateTaskStatus(2, TaskStatus.IN_PROGRESS, mockUser)

      expect(tasksService.getTaskById).toHaveBeenCalledWith(2, mockUser)
      expect(mockTask.save).toHaveBeenCalled()
      expect(result.status).toEqual(TaskStatus.IN_PROGRESS)
    })
  })
})
