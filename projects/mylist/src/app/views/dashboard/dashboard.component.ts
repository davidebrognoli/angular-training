import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TaskListService } from './../../services/task-list.service';
import { Task } from '../../models/list.model';

@Component({
  selector: 'cp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  get tasks() {
    return this.taskListService.tasks;
  }

  /* public formReactiveModel = new FormGroup({
    title: new FormControl(''),
  }); */
  public formReactiveModel = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
  });

  public formModel = {
    title: '',
  };

  private sub = new Subscription();

  constructor(private formBuilder: FormBuilder, private taskListService: TaskListService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}

  handleSubmit(formValues: any) {
    console.log(`handleSubmit`);
    console.log(formValues);

    this.taskListService.addTask(formValues.title);
    // this.formModel.title = '';

    // this.formReactiveModel.title = ''
    // this.formReactiveModel.get('title')?.reset();
    // this.formReactiveModel.get('title')?.setValue('');

    this.formReactiveModel.reset();
  }

  handleCompleteTask(task: Task) {
    this.taskListService.changeStateToComplete(task);
  }

  handleDeleteTask(task: Task) {
    this.taskListService.deleteTask(task);
  }
}
