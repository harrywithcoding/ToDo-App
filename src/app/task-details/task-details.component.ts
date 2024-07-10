import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Input()
  task!: any;
  closeDescription() {
    this.task = null; // Clear the task to close the description
  }
}