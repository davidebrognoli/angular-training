import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Movie, MovieItem, Task } from '../models/list.model';

@Injectable({ providedIn: 'root' })
export class TaskListService {
  private _movies: MovieItem[] = [];

  get movies() {
    return this._movies;
  }
  set movies(value: MovieItem[]) {
    this._movies = value;

    localStorage.setItem('movies', JSON.stringify(value));
  }

  constructor() {
    const storage = localStorage.getItem('movies');

    if (storage) {
      this.movies = JSON.parse(storage);
    }
  }

  getMovie(id: string) {
    return this.movies.find((t) => t.imdbID === id);
  }

  /*changeStateToComplete(task: Task) {
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
  }*/

  addMovie(movie: Movie) {
    this.movies = [{ ...movie, completed: false }, ...this.movies];
  }

  deleteTask(movie: Movie) {
    const confirm = window.confirm(`Sei sicuro di voler eliminare il movie "${movie.Title}"`);

    if (true === confirm) {
      const newMovieList = this.movies.filter((t) => t.imdbID !== movie.imdbID);

      this.movies = newMovieList;
    }
  }

  updateMovie(value: { completed: boolean; rating?: number }, id?: string) {
    const newMovieList = this.movies.map((movie) => {
      if (movie.imdbID === id) {
        return {
          ...movie,
          ...value,
        };
      }
      return movie;
    });
    this.movies = newMovieList;
  }
}
