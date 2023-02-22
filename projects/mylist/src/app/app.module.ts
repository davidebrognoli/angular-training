import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { GlobalLayoutModule } from './shared/global-layout/global-layout.module';
import { MovieCardModule } from './shared/movie-card/movie-card.module';
import { TrackingDirective } from './shared/tracking/tracking.directive';
import { PrintInformationComponent } from './shared/print-information.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { IsDonePipe } from './pipes/is-done.pipe';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ListComponent, DetailComponent, IsDonePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    GlobalLayoutModule,
    MovieCardModule,
    TrackingDirective,
    PrintInformationComponent,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
