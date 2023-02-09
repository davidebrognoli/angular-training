import { Component, OnInit } from '@angular/core';

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
      { id: 'a', title: 'Imparare Angular', done: false },
      { id: 'b', title: 'Imparare HTML', done: true },
      { id: 'c', title: 'Imparare CSS', done: true },
    ];
  }

  addTask() {
    const newTask: Task = {
      id: 'd',
      title: this.model,
      done: false,
    };

    this.tasks?.push(newTask);
  }

  handleSubmit() {
    this.addTask();
    this.model = '';
  }
}
