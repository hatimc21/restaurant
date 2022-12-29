import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


interface RestaurantObject {
  [key: string]: any;
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit{
  restaurant: any;
  mapOptions: google.maps.MapOptions;
  marker: { position: { lat: any; lng: any; };
            title : any;
            label: any;          
};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('assets/api/restaurants.json').subscribe((restaurants: RestaurantObject) => {
        this.restaurant = restaurants[id];
        console.log(this.restaurant);
        this.mapOptions = {
          center: { lat: this.restaurant.restaurant.latitude, lng: this.restaurant.restaurant.longitude },
          zoom: 16
        };
        this.marker = {
            position: { 
              lat:this.restaurant.restaurant.latitude,
              lng:this.restaurant.restaurant.longitude},
              title: this.restaurant.restaurant.nom,
              label: this.restaurant.restaurant.nom
        }
      if (!this.restaurant) {
          // Display an error message or redirect to a different page
          console.error('Restaurant not found');
          this.router.navigate(['/']);
        }
      });
    } else {
      // Display an error message or redirect to a different page
      console.error('No restaurant ID provided');
      this.router.navigate(['/']);
    }
  }
}
