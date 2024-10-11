import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './city';



@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/cities';

  getcities(): Observable<City[]>{
    return this.http.get<City[]>(this.url);
  }

  delete(cities:City): Observable<void>{
    return this.http.delete<void>(`${this.url}/${cities.id}`);
  }
}
