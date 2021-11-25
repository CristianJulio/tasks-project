import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/createTaskDto";
import { TaskEntity } from "./task.entity";

@EntityRepository(TaskEntity)
export class TasksRepository extends Repository<TaskEntity> {

  async getAllTask(): Promise<TaskEntity[]> {
    return await this.createQueryBuilder()
      .getMany()
  }

  async getOneTask(id: number): Promise<TaskEntity> {
    return await this.createQueryBuilder()
      .select("task")
      .from(TaskEntity, "task")
      .where("task.id = :id", { id })
      .getOne()
  }

  async createNewTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const task = await this.createQueryBuilder()
      .insert()
      .into(TaskEntity)
      .values([createTaskDto])
      .returning("*")
      .execute()

    return task.raw[0]
  }

  async updateOneTask(id: number) {
    return 'Falta'
  }

  async deleteOneTask(id: number): Promise<string> {

    await this.createQueryBuilder()
      .delete()
      .from(TaskEntity)
      .where("id = :id", { id })
      .execute()

    return `Task with id (${id}) deleted`
  }
}