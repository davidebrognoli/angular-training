import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieRes } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public baseUrl = 'https://www.omdbapi.com/?apikey=cf5186d5';

  constructor(private http: HttpClient) {}

  public fetchMovies(search: string): Observable<Movie[]> {
    return this.http.get<MovieRes>(`${this.baseUrl}&s=${search}`).pipe(
      filter((res) => res.Response === 'True'),
      map((r) => r.Search)
    );
  }
}
