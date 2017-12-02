import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task1: Task = {
    content: "Learn to code",
    completed: false
  }

  private tasks = [
    new Task(
      "Buy a monkey",
      false
    ),
    new Task(
      "Walk a turtle",
      false
    ),
  ]
  private currentTask = new Task(null, false);

  addTask() {
    console.log(this.currentTask.content);
    let task = new Task(this.currentTask.content, this.currentTask.completed);
    this.tasks.push(task);
    this.currentTask = new Task(null, false);
  }
}
