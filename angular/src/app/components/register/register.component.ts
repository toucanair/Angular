import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../../services/register.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
/*
  CreateUser(FirstN,LastN,Comp,Phone,Email,Ctry,Username,Password){
    alert( "HOLA" + FirstN + LastN + Comp +Phone + Email + Ctry + Username + Password);
  }

  CreateUser(FirstN,LastN,Comp,Phone,Email,Ctry){
    alert("HOLAAAAAAAA"+FirstN+LastN+Comp+Phone+Email+Ctry);
  }*/

  registerForm : FormGroup;
  firstNCtrl: FormControl;
  lastNCtrl: FormControl;
  //companyCtrl: FormControl;
  //compAddressCtrl: FormControl;
  emailCtrl: FormControl;
  phoneCtrl: FormControl;
  userNCtrl: FormControl;
  passwCtrl: FormControl;
  captchaCtrl: FormControl;

  resolved(captchaResponse: string) {
    console.log('Resolved captcha with response: ${captchaResponse}:');
  }

  onSubmit(){
    /*console.log(this.registerForm.value);*/
    this.RegisterService.insertNewUser(this.registerForm.value).subscribe(() => { 
      Swal.fire({
        type: 'success',
        title: 'Welcome to Toucan Air',
        showConfirmButton: false,
        timer: 1500
      })
    
   })
  };

  constructor(
    public RegisterService: RegisterService) { }

  ngOnInit() {

    this.firstNCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.lastNCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
   // this.companyCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    //this.compAddressCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.emailCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.phoneCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.userNCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);    
    this.passwCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.captchaCtrl = new FormControl();
 
    this.registerForm= new FormGroup({
        first_name: this.firstNCtrl,
        last_name: this.lastNCtrl,
      //  company: this.companyCtrl,
      //  companyaddress: this.compAddressCtrl,
        email: this.emailCtrl,
        phone_number: this.phoneCtrl,
        username: this.userNCtrl,
        passw: this.passwCtrl,
        captcha: this.captchaCtrl
    }); 


  }

}
