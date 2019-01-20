import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeserviceService {

  constructor(private http: HttpClient) { }


  getJokes(total): Observable<any> {
    return this.http.get('http://api.icndb.com/jokes/random/' + total);
  }
}
