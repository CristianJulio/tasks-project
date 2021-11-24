import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/createTaskDto";

@Injectable()
export class TasksService {
  getAllTasks() {
    return `This action returns all tasks`
  }

  getOneTask(id: number) {
    return `This action return one task by id`
  }

  createTask(createTaskDto: CreateTaskDto) {
    return `This action creates a new task`
  }

  putTask(id: number, createTaskDto: CreateTaskDto) {
    return `This action updates a task by id`
  }

  deleteTask(id: number) {
    return `This action deletes a task by id`
  }
}