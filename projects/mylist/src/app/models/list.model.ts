export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export type imdbId = string;

export interface SearchMovieResponse {
  Response: 'True' | 'False';
  Error?: string;
  Search: SearchMovieItem[];
  totalResults: string;
}

export interface SearchMovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: imdbId;
}

export interface MovieDetail extends SearchMovieItem {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieItem extends MovieDetail {
  rating?: number;
  completed: boolean;
}
