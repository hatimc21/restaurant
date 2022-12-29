import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cities: any;
  restaurants: any;
  selectedCity: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/api/villes.json').subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    });
    this.http.get('assets/api/restaurants.json').subscribe(restaurants => {
      this.restaurants = restaurants;
      console.log(restaurants);
    });
  }
  
}
