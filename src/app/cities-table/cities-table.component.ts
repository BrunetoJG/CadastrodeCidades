import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrl: './cities-table.component.css'
})
export class CitiesTableComponent implements OnInit{

  cities: City[] = [];

  constructor(private service: CityService, private router: Router){}

  ngOnInit() {
     this.loadCities();
  }
  loadCities() {
      this.service.getcities().subscribe({
          next: data => this.cities = data
        }
      );
  }
  delete(cities:City){
    this.service.delete(cities).subscribe({
      next: () => this.loadCities()
    })
  }

  create(){
    this.router.navigate(['city'])
  }
  createNew(id:number){
    this.router.navigate(['city',id]);
  }

}
