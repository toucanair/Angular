import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  insertNewUser(body){
  // return this.http.post('https://api.toucanair.com/login/users',body);
   return this.http.post('http://localhost:3000/login/users',body);
  }
}
