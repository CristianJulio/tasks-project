import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateTaskDto } from "./dto/createTaskDto";
import { TaskEntity } from "./task.entity";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  getTasks(): Promise<TaskEntity[]> {
    return this.tasksService.getAllTasks()
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return this.tasksService.getOneTask(id)
  }

  @Post()
  postTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.tasksService.createTask(createTaskDto)
  }

  @Put(':id')
  putTask(@Param('id', ParseIntPipe) id: number, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.putTask(id, createTaskDto)
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    const message = await this.tasksService.deleteTask(id)
    return {
      message
    }
  }
}