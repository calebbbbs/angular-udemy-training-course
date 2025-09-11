import { Component, Input, Output } from '@angular/core';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { Task, ITask } from './task/task';

interface ITaskList {
  taskList: ITask[];
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  dummyTasks = DUMMY_TASKS;
  @Input() name!: string;
  @Input() userId!: string;
  @Input() taskList!: ITaskList[];

  get selectedUserTasks() {
    return this.dummyTasks.filter(d => d.userId === this.userId);
  }
}
