import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/list.model';
import { TaskListService } from '../../services/task-list.service';

@Component({
  selector: 'cp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  get movies() {
    return this.taskListService.movies;
  }

  constructor(private taskListService: TaskListService) {}
}
