import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {
  data: any;
  selectedCountry: any;

  constructor(private http: HttpClient) {
    this.http.get('https://api.nationalize.io/?name=nathaniel').subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}
