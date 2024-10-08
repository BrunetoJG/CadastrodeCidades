import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from './city';



@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/cities';

  getcities(): Observable<city[]>{
    return this.http.get<city[]>(this.url);
  }
}
