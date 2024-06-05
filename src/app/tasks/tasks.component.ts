import { Component, computed, inject, input, signal } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  isAddingTask = signal(false);
  private tasksService = inject(TasksService);

  tasks = computed(() => {
    return this.tasksService.getUserTask(this.userId());
  });

  onStartAddTask() {
    this.isAddingTask.set(true);
  }
}
