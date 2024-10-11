import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesTableComponent } from './cities-table/cities-table.component';

const routes: Routes = [
  
  {path: 'cities', component: CitiesTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
