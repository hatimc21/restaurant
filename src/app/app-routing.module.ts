import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { NearbyComponent } from './nearby/nearby.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'nearby', component: NearbyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
