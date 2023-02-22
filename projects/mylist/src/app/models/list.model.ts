export interface Task {
  id: string;
  title: string;
  done: boolean;
}

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
  imdbID: string;
}

export interface MovieItem extends SearchMovieItem {
  rating?: number;
  completed: boolean;
}
