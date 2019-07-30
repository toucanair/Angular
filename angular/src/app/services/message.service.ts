import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {



  constructor(private http: HttpClient) { }

  sendMessage(body){
    return this.http.post('http://ec2-18-217-17-68.us-east-2.compute.amazonaws.com/toucanair',{body},{responseType: 'text'});
  }
}
