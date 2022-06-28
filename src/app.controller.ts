import { Body, Controller, Get, Param, Post, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseTaskDto } from './dto/task.dto';
import { Task } from './db/database.dto'
import { FindOneTask } from './utils/validation'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tasks')
  findAll(@Req() request: Request): Task[] {
    return this.appService.getAllTasks();
  }

  @Get('tasks/:id')
  findById(@Param() {id}: FindOneTask)  {
    return this.appService.getById(Number(id))
  }

  @Post('task')
  async create(@Body() baseTaskDto: BaseTaskDto) {
    this.appService.create(baseTaskDto)
  }
 }
