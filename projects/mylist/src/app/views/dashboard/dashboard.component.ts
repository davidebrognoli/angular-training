import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/list.model';

@Component({
  selector: 'cp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tasks?: Task[];
  public counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      { id: 'a', title: 'Imparare Angular', done: false },
      { id: 'b', title: 'Imparare HTML', done: true },
      { id: 'c', title: 'Imparare CSS', done: true },
    ];
  }

  addTask() {
    this.tasks?.push({
      id: 'd',
      title: 'Imparare a leggere',
      done: false,
    });
  }

  handleIncrement() {
    this.counter++;
  }
}