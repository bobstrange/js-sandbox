import { Test } from "@nestjs/testing"
import { TasksService } from "./tasks.service"
import { TaskRepository } from "./task.repository"
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto"
import { TaskStatus } from "./task-status.enum"
import { userInfo } from "os"
import { NotFoundException } from "@nestjs/common"

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn()
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
})
