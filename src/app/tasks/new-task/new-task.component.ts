import { Component, inject, input, model, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  //two way binding
  displayModal = model.required<boolean>();

  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  onDismissModal(modal: HTMLDialogElement) {
    modal.close('dismiss');
    this.displayModal.set(false);
  }

  onSubmit(modal: HTMLDialogElement) {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId(),
    );
    modal.close('submitted');
    this.displayModal.set(false);
  }
}
