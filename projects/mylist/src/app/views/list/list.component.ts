import { Component } from '@angular/core';
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
