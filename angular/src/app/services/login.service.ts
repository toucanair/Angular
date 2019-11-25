import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  validateLogin(body){
    //return this.http.post('https://api.toucanair.com/validate/login',body);
    return this.http.post('https://api.toucanair.com/validate/login',body);
    }
  
  getUserById(id: number): Observable<any> {
    return this.http.get(`https://api.toucanair.com/login/users/${id}`).pipe(
      map((data:any) => {
          return{name: data.first_name, lastn: data.last_name, phone: data.phone_number, 
            email: data.email, usern: data.username, passw: data.passw}
      })
    );
  }
  
  modifyUserById(id: number, body): Observable<any>{
    return this.http.put<any>(`https://api.toucanair.com/login/users/${id}`,body, this.httpOptions);
  }

  deleteUserById(id:number){
    return this.http.delete(`https://api.toucanair.com/login/users/${id}`);
  }

  
}