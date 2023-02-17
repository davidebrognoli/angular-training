import { Component, Input } from '@angular/core';
import { Movie } from '../../models/list.model';

@Component({
  selector: 'cp-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie?: Movie;
}
