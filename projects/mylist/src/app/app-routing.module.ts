import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DetailComponent } from './views/detail/detail.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [{ path: 'list', component: ListComponent }] },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
