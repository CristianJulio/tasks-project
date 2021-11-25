import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @Column({ default: false })
  done: boolean;
}