import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { Task } from '../../models/list.model';

@Component({
  selector: 'cp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tasks?: Task[];

  public model: string = '';

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      { id: uuidv4(), title: 'Imparare Angular', done: false },
      { id: uuidv4(), title: 'Imparare HTML', done: true },
      { id: uuidv4(), title: 'Imparare CSS', done: true },
    ];
  }

  addTask() {
    const newTask: Task = {
      id: uuidv4(),
      title: this.model,
      done: false,
    };

    this.tasks?.push(newTask);
  }

  handleSubmit() {
    this.addTask();
    this.model = '';
  }

  handleMarkTaskAsComplete(task: Task) {
    console.log(`${this.constructor.name} - handleMarkTaskAsComplete()`, task);
  }

  handleDeleteTask(task: Task) {
    console.log(`${this.constructor.name} - handleDeleteTask()`, task);
  }
}
