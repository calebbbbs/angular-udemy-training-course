import { Component, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './components/tasks/tasks';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-udemy-training-course');
  users = DUMMY_USERS;
  userId?: string;

  get selectedUser() {
    // name! tells TypeScript the component it will have a value and not be undefined or null
    return this.users.find(u => u.id === this.userId)!;
  }

  get SelectedUserTasks() {
    return DUMMY_TASKS;
  }

  onSelectUser(id: string){
    console.log(`selectedUser's id = ${id}`);
    this.userId = id;
  }
}
