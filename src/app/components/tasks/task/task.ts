import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_TASKS } from '../../../dummy-tasks';
import { Time } from '@angular/common';

export interface ITask {
  id: Number;
  description: string;
  userId: string;
  time: String;
  summary: string;
  completed: boolean;
};

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() showTaskList = new EventEmitter<ITask>();

  onShowTasks(): void{
    this.showTaskList.emit(this.task);
  }
}
