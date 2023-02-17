export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export interface MovieRes {
  Response: 'True' | 'False';
  Error?: string;
  Search: Movie[];
  totalResults: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieItem extends Movie {
  rating?: number;
  completed: boolean;
}
