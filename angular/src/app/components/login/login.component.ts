import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public Currentid;
  userForm : FormGroup;
  FirstnameCtrl: FormControl;
  LastnameCtrl: FormControl;
  EmailCtrl: FormControl;
  PhoneCtrl: FormControl;
  UsernameCtrl: FormControl;
  PasswordCtrl: FormControl;
  PasswordConfCtrl: FormControl;
  captchaCtrl: FormControl;
  

  resolved(captchaResponse: string) {
    console.log('Resolved captcha with response: ${captchaResponse}:');
   
  }
  user;


  
  private userShow(){
    this.Currentid = sessionStorage.getItem('auth_id');
    

    const assignUser = (user) => this.user = user;
    this.LoginService.getUserById(this.Currentid)
    .subscribe(assignUser);
    return assignUser;
  }
  
  
  modifyUser(first_name:string , ln:string, email:string, phone:string, usern:string, passw:string){
    this.Currentid = sessionStorage.getItem('auth_id');
    
    if(this.FirstnameCtrl.value===null){
      this.FirstnameCtrl.setValue(first_name);
    }
    if(this.LastnameCtrl.value===null){
      this.LastnameCtrl.setValue(ln);
    }
    if(this.EmailCtrl.value===null){
      this.EmailCtrl.setValue(email);
    }
    if(this.PhoneCtrl.value===null){
      this.PhoneCtrl.setValue(phone);
    }
    if(this.UsernameCtrl.value===null){
      this.UsernameCtrl.setValue(usern);
    }
    if(this.PasswordCtrl.value===null){
      this.PasswordCtrl.setValue(passw);
    }


    console.log(this.userForm.value);

    this.LoginService.modifyUserById(this.Currentid,this.userForm.value).subscribe(data => { 
      
      if (data){
        Swal.fire({
          type: 'success',
          title: 'User Modified',
          showConfirmButton: false,
          timer: 1500
        })
       this.router.navigateByUrl('/login')
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Try again later',
        showConfirmButton: false,
        timer: 3000
      })
    })
  }
  
  deleteUser(){
    this.Currentid = sessionStorage.getItem('auth_id');

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete it!'
    }).then((valor) => {
      if (valor.value) {
        console.log(valor.value);
        this.LoginService.deleteUserById(this.Currentid).subscribe(data => { 
          
          if (data){
            Swal.fire({
              type: 'success',
              title: 'See you soon',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigateByUrl('/home')
          }
        }, error => {
          Swal.fire({
            type: 'error',
            title: 'Check your Connection. Try again later',
            showConfirmButton: false,
            timer: 3000
          })
        })
      }
    });

  


  };


  constructor(
  public LoginService: LoginService, 
  private HttpClient: HttpClient,
  private router: Router) { }

  ngOnInit() {
    this.userShow();


    
    this.FirstnameCtrl = new FormControl(null, [Validators.required]);
    this.LastnameCtrl = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    this.EmailCtrl = new FormControl(null,[Validators.required, Validators.email]);
    this.PhoneCtrl = new FormControl(null,[Validators.required, Validators.minLength(10)]);
    this.UsernameCtrl = new FormControl(null,[Validators.required, Validators.minLength(8)]);    
    this.PasswordCtrl = new FormControl(null,[Validators.required, Validators.minLength(8)]);
    this.PasswordConfCtrl = new FormControl(null,[Validators.required, Validators.minLength(8)]);
    this.captchaCtrl = new FormControl();

   
    this.userForm= new FormGroup({
      first_name: this.FirstnameCtrl,
      last_name: this.LastnameCtrl,
      email: this.EmailCtrl,
      phone_number: this.PhoneCtrl,
      username: this.UsernameCtrl,
      passw: this.PasswordCtrl
    })
  }
}
