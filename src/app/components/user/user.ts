import { Component, EventEmitter, Input, Output } from '@angular/core';

interface IUser {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({ required: true }) user!: IUser;
  @Output() select = new EventEmitter<string>();
  @Output() userName = new EventEmitter<string>();
  // output does not create a signal and can be used in replace of @Output
  // creates an EventEmitter when calling output() instead of making a new instance
  //select = output<string>();

  // signal based code
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  // computed creates a signal to retrieve the value passed similar to get imagePath
  // to be used with signals and replaces need for the public get
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  public get imagePath(): string {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.user?.id);
    this.userName.emit(this.user?.name);
  }
}
