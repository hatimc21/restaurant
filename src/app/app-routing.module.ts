import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { NearbyComponent } from './nearby/nearby.component';
import { CitiesComponent } from './cities/cities.component';
import { ZonesComponent } from './zones/zones.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'nearby', component: NearbyComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'zones', component: ZonesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
