import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {

   private apiUrl = 'https://jsonplaceholder.typicode.com/users';
   constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }


  
}
