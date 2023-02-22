import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';


import { TrackingDirective } from '../tracking/tracking.directive';

import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    TrackingDirective,
    // Material's modules
    MatCardModule,
  ],
})
export class MovieCardModule {}
