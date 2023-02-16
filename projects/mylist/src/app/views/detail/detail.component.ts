import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskListService } from '../../services/task-list.service';
import { Task } from '../../models/list.model';

@Component({
  selector: 'cp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public currentId!: string;
  public task: Task | undefined;

  constructor(private route: ActivatedRoute, private taskListService: TaskListService, private router: Router) {
    this.route.params.subscribe(({ id }) => (this.currentId = id));
  }

  ngOnInit(): void {
    this.updateTask();
  }

  updateTask() {
    this.task = this.taskListService.getTask(this.currentId);
  }

  handleCompleteTask(task: Task) {
    console.log(`${this.constructor.name} - handleCompleteTask()`, task);

    this.taskListService.changeStateToComplete(task);
    this.updateTask();
  }

  handleDeleteTask(task: Task) {
    console.log(`${this.constructor.name} - handleDeleteTask()`, task);

    this.taskListService.deleteTask(task);
    this.router.navigate(['/']);
  }
}
