import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  enteredTitle = '';
  summary = '';
  enteredDate = '';

  private _tasksService = inject(TasksService);

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<INewTaskData>();

  onCancelNewTask(): void {
    this.close.emit();
  }

  onSubmit() {
    this._tasksService.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.summary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
