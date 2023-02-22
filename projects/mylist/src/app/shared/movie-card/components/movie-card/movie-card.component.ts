import { Component, Input } from '@angular/core';

import { SearchMovieItem } from '../../../../models/list.model';

@Component({
  selector: 'cp-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie?: SearchMovieItem;
}
