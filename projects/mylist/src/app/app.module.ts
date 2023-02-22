import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { GlobalLayoutModule } from './shared/global-layout/global-layout.module';
import { MovieCardModule } from './shared/movie-card/movie-card.module';
import { TrackingDirective } from './shared/tracking/tracking.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './views/list/list.component';
import { IsDonePipe } from './pipes/is-done.pipe';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ListComponent, IsDonePipe],
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
    GlobalLayoutModule,
    MovieCardModule,
    TrackingDirective,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
