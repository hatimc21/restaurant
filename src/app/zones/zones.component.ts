import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent {
  data: any;
  data2:any;
  selectedCountry: any;
  selectedYear: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.nationalize.io/?name=nathaniel').subscribe(data => {
      this.data = data;
      console.log(data);
    });
    this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').subscribe(data2 => {
      this.data2 = data2;
      console.log(data2);
    });
  }
}
