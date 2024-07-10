import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

interface Task {
  taskName: string;
  description: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  searchTerm: string = '';
  showForm: boolean = false;
  showList: boolean = true;
  taskArray: Task[] = [
    { taskName: 'Check Mail', description: 'Check all unread mails', isCompleted: false },
    { taskName: 'Buy Groceries', description: 'Milk, Bread, Butter, Eggs', isCompleted: true },
    { taskName: 'Workout', description: 'Go for a 30-minute run', isCompleted: false },
    { taskName: 'Read Book', description: 'Read 50 pages of "The Great Gatsby"', isCompleted: true },
    { taskName: 'Call Parents', description: 'Catch up with mom and dad', isCompleted: false }
  ];
  selectedTask: Task | null = null;

  onSubmit(form: NgForm){
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      description: form.controls['description'].value,
      isCompleted: false
    })
    form.reset();
    this.showForm = false;
    this.showList = true;
  }
  onDelete(index: number){
    console.log(index);
    this.taskArray.splice(index, 1);
    if (this.taskArray.length === 0) {
      this.showList = false;
    }
  }
  onCheck(index: number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
  showDescription(index: number) {
    debugger
    console.log(this.taskArray[index]);
    this.selectedTask = this.taskArray[index];
  }

  clearDescription() {
    this.selectedTask = null;
  }

  filteredTasks() {
    if (!this.searchTerm) {
      return this.taskArray;
    }
    return this.taskArray.filter(task => 
      task.taskName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
