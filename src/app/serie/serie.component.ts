import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  series: any;
  selectedseries: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/api/series.json').subscribe(series => {
      this.series = series;
      console.log(series);
    });
  }

}
