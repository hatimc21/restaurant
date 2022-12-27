import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  data: any;
  selectedCountry: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.nationalize.io/?name=nathaniel').subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
  
}
