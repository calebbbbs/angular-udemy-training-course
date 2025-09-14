import { Component, Input, inject } from '@angular/core';
import { ITask } from './task.model';
import { Card } from '../../card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: ITask;

  private _tasksService = inject(TasksService);

  onCompletedTask(): void {
    this._tasksService.removeTask(this.task.id);
  }
}
