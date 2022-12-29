import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { NearbyComponent } from './nearby/nearby.component';
import { CitiesComponent } from './cities/cities.component';
import { ZonesComponent } from './zones/zones.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { SerieComponent } from './serie/serie.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'nearby', component: NearbyComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'zones', component: ZonesComponent},
  {path: 'specialite', component: SpecialiteComponent},
  {path: 'serie', component: SerieComponent},
  {path: 'restaurant/:id', component: RestaurantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
