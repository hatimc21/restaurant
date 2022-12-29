import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {
  specialities: any;
  selectedSpecialite: number;
  constructor(private http: HttpClient) {
    this.http.get('assets/api/specialites.json').subscribe(specialities => {
      this.specialities = specialities;
      console.log(specialities);
    });
  }
}
