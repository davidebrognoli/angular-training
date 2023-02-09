import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { Task } from '../../models/list.model';

@Component({
  selector: 'cp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tasks: Task[] = [
    { id: uuidv4(), title: 'Imparare Angular', done: false },
    { id: uuidv4(), title: 'Imparare HTML', done: true },
    { id: uuidv4(), title: 'Imparare CSS', done: true },
  ];

  public model: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    const newTask: Task = {
      id: uuidv4(),
      title: this.model,
      done: false,
    };

    this.tasks = [...this.tasks, newTask];
  }

  handleSubmit() {
    this.addTask();
    this.model = '';
  }

  handleMarkTaskAsComplete(task: Task) {
    if (task.done === true) {
      console.warn(`The task was just complete!`);
      return;
    }

    const confirm = window.confirm(`Sei sicuro di aver completato l'attività?`);
    // console.log(`${this.constructor.name} - handleMarkTaskAsComplete()`, task, confirm);

    if (confirm === true) {
      const taskToUpdateIndex = this.tasks.findIndex((t) => t.id === task.id);

      if (taskToUpdateIndex !== -1) {
        this.tasks.splice(taskToUpdateIndex, 1, { ...this.tasks[taskToUpdateIndex], done: true });
      }
    }
  }

  handleDeleteTask(task: Task) {
    const confirm = window.confirm('Sei sicuro di voler procedere?');
    // console.log(`${this.constructor.name} - handleDeleteTask()`, task, confirm);

    if (confirm === true) {
      const newTaskList = this.tasks.filter((t) => t.id !== task.id);

      this.tasks = newTaskList;
    }
  }
}
