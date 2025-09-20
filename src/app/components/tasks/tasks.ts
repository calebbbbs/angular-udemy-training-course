import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  isAddingTask = false;

  @Input() name!: string;
  @Input() userId!: string;

  constructor(private _tasksService: TasksService) {}

  get selectedUserTasks() {
    return this._tasksService.getUserTasks(this.userId);
  }

  onStartAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseNewTask() {
    this.isAddingTask = false;
  }
}
