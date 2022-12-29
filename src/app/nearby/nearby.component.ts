import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent implements OnInit{
  apiLoaded: Observable<boolean>;
  lat = 0;
  lng = 0;
  mapOptions: google.maps.MapOptions;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.mapOptions = {
        center: { lat: this.lat, lng: this.lng },
        zoom: 14
      };
    });

  }

  marker = {
    position: { lat:this.lat, lng:this.lng},
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }
    
}
