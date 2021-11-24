import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskEntity } from './tasks/task.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'tasks_project',
    entities: [TaskEntity],
    synchronize: true
  }), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
