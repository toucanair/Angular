import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {


  registerForm : FormGroup;
  firstNCtrl: FormControl;
  lastNCtrl: FormControl;
  emailCtrl: FormControl;
  phoneCtrl: FormControl;
  userNCtrl: FormControl;
  passwCtrl: FormControl;
  passConfCtrl: FormControl;
  captchaCtrl: FormControl;

  resolved(captchaResponse: string) {
    console.log('Resolved captcha with response: ${captchaResponse}:');
  }

  onSubmit(){

    this.RegisterService.insertNewUser(this.registerForm.value).subscribe(data => { 
      if (data){
        Swal.fire({
          type: 'success',
          title: 'Welcome Back',
          showConfirmButton: false,
          timer: 1500
        })
       this.router.navigateByUrl('/shopForParts')
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Check your Connection. Try again later',
        showConfirmButton: false,
        timer: 3000
      })
    })
  };

  constructor(
    public RegisterService: RegisterService,
    private router: Router) { }

  ngOnInit() {

    this.firstNCtrl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.lastNCtrl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.emailCtrl = new FormControl('', [Validators.required, Validators.email]);
    this.phoneCtrl = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.userNCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);    
    this.passwCtrl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.passConfCtrl = new FormControl('', [Validators.required]);
    this.captchaCtrl = new FormControl();
 
    this.registerForm= new FormGroup({
        first_name: this.firstNCtrl,
        last_name: this.lastNCtrl,
        email: this.emailCtrl,
        phone_number: this.phoneCtrl,
        username: this.userNCtrl,
        passw: this.passwCtrl,
        passConfCtrl: this.passConfCtrl,
        captcha: this.captchaCtrl
    }); 


  }

}
