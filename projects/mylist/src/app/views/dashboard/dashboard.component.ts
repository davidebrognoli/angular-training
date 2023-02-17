import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TaskListService } from './../../services/task-list.service';
import { Movie } from '../../models/list.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'cp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  get movies() {
    return this.taskListService.movies
      .sort((a, b) => {
        const aRating = a.rating || 0;
        const bRating = b.rating || 0;
        if (aRating > bRating) {
          return -1;
        }
        if (bRating > aRating) {
          return 1;
        }
        return 0;
      })
      .slice(0, 5);
  }

  public formReactiveModel = this.formBuilder.group({
    title: [''],
  });

  public formModel = {
    title: '',
  };

  public results: Movie[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private taskListService: TaskListService,
    private httpService: HttpService
  ) {
    const control = this.formReactiveModel.get('title');
    control?.valueChanges.subscribe((val) => {
      if (val) {
        this.httpService.fetchMovies(val).subscribe((res) => {
          this.results = res;
        });
      } else {
        this.results = [];
      }
    });
  }

  handleMovieClick(movie: Movie) {
    this.formReactiveModel.get('title')?.setValue('');
    this.taskListService.addMovie(movie);
  }
}
