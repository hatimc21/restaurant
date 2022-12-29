import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent {
  cities: any;
  data2:any;
  selectedCity: any;
  selectedYear: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/api/villes.json').subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    });
    this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').subscribe(data2 => {
      this.data2 = data2;
      console.log(data2);
    });
  }
}
