import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModel } from './../../models/user-model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']/*
  template: `
        <recaptcha
          [(ngModel)]="myRecaptcha"
          (scriptLoad)="onScriptLoad()"
          (scriptError)="onScriptError()"
        ></recaptcha>
    `*/
})
export class RegisterComponent implements OnInit {
/*
  CreateUser(FirstN,LastN,Comp,Phone,Email,Ctry,Username,Password){
    alert( "HOLA" + FirstN + LastN + Comp +Phone + Email + Ctry + Username + Password);
  }*/

  CreateUser(FirstN,LastN,Comp,Phone,Email,Ctry){
    alert("HOLAAAAAAAA"+FirstN+LastN+Comp+Phone+Email+Ctry);
  }

  constructor() { }

  ngOnInit() {
  }

  

/*
  myRecaptcha = new FormControl(false);
 
  onScriptLoad() {
      console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
      console.log('Something went long when loading the Google reCAPTCHA')
  }
*/
}
