import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent {
  restaurants: any;
  cities: any;
  zones:any;
  selectedCity: any;
  selectedZone: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/api/villes.json').subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    });
    this.http.get('assets/api/zones.json').subscribe(zones => {
      this.zones = zones;
      console.log(zones);
    });
    this.http.get('assets/api/restaurants.json').subscribe(restaurants => {
      this.restaurants = restaurants;
      console.log(restaurants);
    });
  }
  }

