import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskListService } from '../../services/task-list.service';
import { Movie, MovieItem, Task } from '../../models/list.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public currentId!: string;
  public movie: MovieItem | undefined;

  public movieForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private taskListService: TaskListService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe(({ id }) => (this.currentId = id));

    this.movieForm = this.fb.group({
      completed: [false],
      rating: [],
    });

    this.movieForm.valueChanges.subscribe((value) => {
      this.taskListService.updateMovie(value, this.movie?.imdbID);
    });
  }

  ngOnInit(): void {
    this.updateTask();
  }

  updateTask() {
    this.movie = this.taskListService.getMovie(this.currentId);
    if (this.movie) {
      const { completed, rating } = this.movie;
      this.movieForm.patchValue({ completed, rating });
    }
  }

  handleCompleteTask(task: Task) {
    console.log(`${this.constructor.name} - handleCompleteTask()`, task);

    //this.taskListService.changeStateToComplete(task);
    this.updateTask();
  }

  handleDeleteTask(task: Task) {
    console.log(`${this.constructor.name} - handleDeleteTask()`, task);

    //this.taskListService.deleteTask(task);
    this.router.navigate(['/']);
  }
}
