import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent {
  apiLoaded: Observable<boolean>;
  mapOptions: google.maps.MapOptions = {
    center: { lat:31.6534876, lng:-8.0213642},
    zoom : 14
  }
  marker = {
    position: { lat:31.6534876, lng:-8.0213642},
  }
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

}
