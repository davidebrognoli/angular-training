import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '../models/list.model';

@Injectable({ providedIn: 'root' })
export class TaskListService {
  private _tasks: Task[] = [];

  get tasks() {
    return this._tasks;
  }
  set tasks(value: Task[]) {
    this._tasks = value;

    localStorage.setItem('tasks', JSON.stringify(value));
  }

  constructor() {
    const storage = localStorage.getItem('tasks');

    if (storage) {
      this.tasks = JSON.parse(storage);
    }
  }

  getTask(id: string) {
    return this.tasks.find((t) => t.id === id);
  }

  changeStateToComplete(task: Task) {
    const confirm = window.confirm(`Sei di aver completato il task "${task.title}"`);

    if (true === confirm) {
      const taskToUpdateIndex = this.tasks.findIndex((t) => t.id === task.id);

      if (taskToUpdateIndex !== -1) {
        const newTask = { ...task, done: true };
        const newTaskList = [...this.tasks];

        newTaskList.splice(taskToUpdateIndex, 1, newTask);

        this.tasks = newTaskList;
      }
    }
  }

  addTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      done: false,
    };

    this.tasks = [newTask, ...this.tasks];
  }

  deleteTask(task: Task) {
    const confirm = window.confirm(`Sei sicuro di voler eliminare il task "${task.title}"`);

    if (true === confirm) {
      const newTaskList = this.tasks.filter((t) => t.id !== task.id);

      this.tasks = newTaskList;
    }
  }
}
