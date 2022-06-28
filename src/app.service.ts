import { Injectable } from '@nestjs/common';
import { Task } from './db/database.dto';
import { FindOneTask } from './utils/validation'
@Injectable()
export class AppService {
  private readonly tasks: Task[] = [];
  getAllTasks(): Task[] {
    return this.tasks;
  }

  create(task: Task) {
    this.tasks.push(task)
  }

  getById(id: number)  {
    return this.tasks.filter(task => task.id === id)
  }
}