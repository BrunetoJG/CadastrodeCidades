import { Component, OnInit } from '@angular/core';
import { city } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrl: './cities-table.component.css'
})
export class CitiesTableComponent implements OnInit{

  cities: city[] = [];

  constructor(private service: CityService){}

  ngOnInit() {
     this.loadCities();
  }
  loadCities() {
      this.service.getcities().subscribe({
          next: data => this.cities = data
        }
      );
  }

}
