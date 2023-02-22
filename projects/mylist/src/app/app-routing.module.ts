import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  // { path: 'detail/:id', component: DetailComponent },
  {
    path: 'detail/:id',
    loadChildren: () => import('./features/detail-movie/detail-movie.module').then((m) => m.DetailMovieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
