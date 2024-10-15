import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesTableComponent } from './cities-table/cities-table.component';
import { CitiesFormComponent } from './cities-form/cities-form.component';

const routes: Routes = [
  {path: '',  redirectTo : '/cities', pathMatch: 'full' },
  {path: 'cities', component: CitiesTableComponent },
  {path: 'city',  component: CitiesFormComponent },
  {path: 'city/:id',  component: CitiesFormComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
