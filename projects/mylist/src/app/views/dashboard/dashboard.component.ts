import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

import { Task } from '../../models/list.model';

interface FormTask {
  title: string;
}

@Component({
  selector: 'cp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public tasks: Task[] = [
    { id: uuidv4(), title: 'Imparare Angular', done: false },
    { id: uuidv4(), title: 'Imparare HTML', done: true },
    { id: uuidv4(), title: 'Imparare CSS', done: true },
  ];

  public form = this.fb.group<{
    title: FormControl<string>;
  }>({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  private sub = new Subscription();

  constructor(private fb: FormBuilder) {
    const formSubscriber = this.form.get('title')?.valueChanges.subscribe(console.log);
    this.sub.add(formSubscriber);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}

  addTask() {
    const title = this.form.get('title')?.value;

    if (title) {
      const newTask: Task = {
        id: uuidv4(),
        title,
        done: false,
      };

      this.tasks = [...this.tasks, newTask];
    }
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.addTask();
    this.form.reset();
    this.form.markAsPristine();
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
