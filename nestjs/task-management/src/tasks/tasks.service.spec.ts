import { Test } from "@nestjs/testing"
import { TasksService } from "./tasks.service"
import { TaskRepository } from "./task.repository"
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto"
import { TaskStatus } from "./task-status.enum"

const mockTaskRepository = () => ({
  getTasks: jest.fn()
})

const mockUser = {
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
})
