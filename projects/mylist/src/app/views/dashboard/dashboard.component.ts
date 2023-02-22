import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

import { TaskListService } from './../../services/task-list.service';
import { HttpService } from '../../services/http.service';
import { SearchMovieItem } from '../../models/list.model';

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

  public formReactiveModel = this.formBuilder.group(
    {
      title: [''],
    },
    { notNullable: true }
  );

  public formModel = {
    title: '',
  };

  public results: SearchMovieItem[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private taskListService: TaskListService,
    private httpService: HttpService
  ) {
    const control = this.formReactiveModel.get('title');

    control?.valueChanges
      .pipe(
        filter((term) => term?.length > 3),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((term) => this.httpService.fetchMovies(term))
      )
      .subscribe({
        next: (resp) => (this.results = resp),
        error: console.error,
      });
  }

  handleMovieClick(movie: SearchMovieItem) {
    this.formReactiveModel.get('title')?.setValue('');
    // this.taskListService.addMovie(movie);

    this.httpService.fetchMovieDetail(movie.imdbID).subscribe((resp) => this.taskListService.addMovie(resp));
  }
}
