import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  providers: [TasksService],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = signal<string>(undefined!);
  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId())!;
  });

  onSelectUser(id: string) {
    console.log(id);
    this.selectedUserId.set(id);
    // this.selectUser.set(this.users.find((user) => user.id === event)!);
  }
}
