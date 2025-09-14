import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { ITask, INewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;
  private newTask = <ITask>{};

  constructor() {
    const tasksInStorage = localStorage.getItem('tasks');

    if (tasksInStorage) {
      this.tasks = JSON.parse(tasksInStorage);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks
      .sort((a: ITask, b: ITask) => {
        if (a.time < b.time) {
          return -1;
        } else if (a.time > b.time) {
          return 1;
        }
        return 0;
      })
      .filter((t) => t.userId === userId);
  }

  addNewTask(taskData: INewTaskData, userId: string) {
    this.newTask = {
      id: this.tasks.length + 1,
      description: taskData.title,
      summary: taskData.summary,
      userId: userId,
      time: new Date(taskData.date).toLocaleDateString(),
      completed: false,
    };

    this.tasks.push(this.newTask);
    this.saveTasksToLStorage();
    this.newTask = <ITask>{};
  }

  removeTask(taskId: number) {
    this.tasks.forEach((t) => {
      if (t.id === taskId) {
        t.completed = true;
      }
    });
    this.saveTasksToLStorage();
  }

  private saveTasksToLStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
