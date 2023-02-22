import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { switchMap } from 'rxjs/operators';
import { iif, map, Observable, of, throwError } from 'rxjs';

import { SearchMovieItem, SearchMovieResponse } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public baseUrl = 'https://www.omdbapi.com/?apikey=cf5186d5';

  constructor(private http: HttpClient) {}

  public fetchMovies(term: string): Observable<SearchMovieItem[]> {
    const params = new HttpParams({
      fromObject: { s: term },
    });

    return this.http.get<SearchMovieResponse>(`${this.baseUrl}`, { params }).pipe(
      // filter((res) => res.Response === 'True'),
      switchMap((resp) => {
        const isValidResponse = coerceBooleanProperty(resp.Response.toLowerCase()) === true;

        return iif(
          () => isValidResponse === true,
          of(resp),
          throwError(() => ({ message: resp.Error }))
        );
      }),
      map((r) => r.Search)
    );
  }
}
