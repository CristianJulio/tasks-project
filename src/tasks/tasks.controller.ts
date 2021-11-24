import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateTaskDto } from "./dto/createTaskDto";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  getTasks() {
    return this.tasksService.getAllTasks()
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getOneTask(id)
  }

  @Post()
  postTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto)
  }

  @Put(':id')
  putTask(@Param('id', ParseIntPipe) id: number, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.putTask(id, createTaskDto)
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id)
  }
}