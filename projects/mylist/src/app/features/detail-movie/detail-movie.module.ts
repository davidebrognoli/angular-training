import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';


import { PrintInformationComponent } from '../../shared/print-information.component';
import { TrackingDirective } from '../../shared/tracking/tracking.directive';

import { DetailMovieRoutingModule } from './detail-movie-routing.module';
import { DetailComponent } from './views/detail/detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    // Shared modules
    TrackingDirective,
    PrintInformationComponent,
    // Material modules
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,
  ],
})
export class DetailMovieModule {}
