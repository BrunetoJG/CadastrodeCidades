import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cities-form',
  templateUrl: './cities-form.component.html',
  styleUrl: './cities-form.component.css'
})
export class CitiesFormComponent implements OnInit {

formGroupCities: FormGroup;
isEditing: boolean = false;

constructor(private router: Router,
  private service: CityService,
  private formBuilder: FormBuilder,
  private activeRoute: ActivatedRoute
)
{
  this.formGroupCities = formBuilder.group({
    id : [''],
    name : [''],
    population : [''],
    area : [''],
    state : ['']
  });
}

ngOnInit(){
  const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
  if(id !=0){
    this.isEditing= true;
    this.loadCities(id);
  }
}
  loadCities(id:number){
    this.service.getcitiesById(id).subscribe({
      next : data => this.formGroupCities.setValue(data)
    });
  }
  update(){
    this.service.update(this.formGroupCities.value).subscribe({
      next: () => this.router.navigate(['city'])
    });
  }
  save(){
    this.service.update(this.formGroupCities.value).subscribe({
      next: () => this.router.navigate(['city'])
    });
  }

}