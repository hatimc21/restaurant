import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  data: any;
  selectedCountry: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.nationalize.io/?name=nathaniel').subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}
