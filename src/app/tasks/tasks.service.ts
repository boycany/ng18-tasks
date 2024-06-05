import { signal } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskData } from './new-task/new-task.model';

export class TasksService {
  private tasks = signal(DUMMY_TASKS);

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  getUserTask(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.update((prev) => [
      ...prev,
      {
        id: new Date().getTime().toString(),
        userId: userId,
        dueDate: taskData.date,
        title: taskData.title,
        summary: taskData.summary,
      },
    ]);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
    this.saveTasks();
  }
}
