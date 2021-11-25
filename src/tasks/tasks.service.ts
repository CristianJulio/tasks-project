import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/createTaskDto";
import { TaskEntity } from "./task.entity";
import { TasksRepository } from "./tasks.repository";

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) { }

  getAllTasks(): Promise<TaskEntity[]> {
    return this.tasksRepository.getAllTask()
  }

  getOneTask(id: number): Promise<TaskEntity> {
    return this.tasksRepository.getOneTask(id)
  }

  createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.tasksRepository.createNewTask(createTaskDto)
  }

  putTask(id: number, createTaskDto: CreateTaskDto) {
    return `This action updates a task by id`
  }

  deleteTask(id: number): Promise<string> {
    return this.tasksRepository.deleteOneTask(id)
  }
}