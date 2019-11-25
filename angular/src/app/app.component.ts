import { Component, OnInit, HostListener, Inject,  ViewChild, TemplateRef, ElementRef  } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserModel } from './models/user-model';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { MessageService } from './services/message.service';
import { LoginService } from './services/login.service';
import Swal from 'sweetalert2';
import { Subscription, Subscriber } from 'rxjs';



declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public navbarOpen;
  
  token;

  emailForm : FormGroup;
  nameCtrl: FormControl;
  companyCtrl: FormControl;
  emailCtrl: FormControl;
  phoneCtrl: FormControl;
  messageCtrl: FormControl;
  countryCtrl: FormControl;
  usrnmCtrl: FormControl;
  passwCtrl: FormControl;
  captchaCtrl: FormControl;

  validateLoginForm: FormGroup;
  usernCtrl: FormControl;
  pswCtrl: FormControl;
  
  resolved(captchaResponse: string) {
    console.log('Resolved captcha with response: ${captchaResponse}:');
  }

  onSubmit(){
    this.MessageService.sendMessage(this.emailForm.value).subscribe(() => { 
      Swal.fire({
        type: 'success',
        title: 'Your Message was Sent',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('')
    })
  };

  OnLogin(){
  this.LoginService.validateLogin(this.validateLoginForm.value).subscribe((data: any) =>{ 
    
      if (data){
        localStorage.setItem('auth_token',data.token);
        sessionStorage.setItem('auth_id',data.CurrentId);
            Swal.fire({
              type: 'success',
              title: 'Welcome Back',
              showConfirmButton: false,
              timer: 1500
            })
          this.router.navigateByUrl('/shopForParts');
      }else{
        Swal.fire({
          type: 'error',
          title: 'Username and/or Password Incorrect. Try again',
          showConfirmButton: false,
          timer: 3000
      })
      }   
    }, error =>{
      Swal.fire({
        type: 'error',
        title: 'Check your Connection. Try again later',
        showConfirmButton: false,
        timer: 3000
      })
    })
  }

  logout(){
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_id');
    this.router.navigateByUrl('/home');
  }

  public get logIn():boolean {
    return(localStorage.getItem('auth_token') !== null);
  }

  Users:Array<UserModel> = [];


  toggleNavbar() {
      this.navbarOpen=true;
      this.navbarOpen = !this.navbarOpen;
  }
  

  constructor(@Inject(DOCUMENT) 
    document,
    private modalService : BsModalService,
    public MessageService: MessageService,
    public LoginService: LoginService,
    private router: Router
  ){ }
   
 

  modalRef : BsModalRef;
  @ViewChild('template') modal : TemplateRef<any>;

  
  ShowLogin(){
   this.modalRef = this.modalService.show(this.modal);
  }
  HideLogin(){
    this.modalRef.hide();
  }

  ShowEmail(){
    this.modalRef = this.modalService.show(this.modal);
   }



  ngOnInit(){
    
    this.nameCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.companyCtrl = new FormControl('', Validators.required);
    this.emailCtrl = new FormControl('', [Validators.required, Validators.email]);
    this.phoneCtrl = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.messageCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.captchaCtrl = new FormControl();
 
    this.emailForm= new FormGroup({
        name: this.nameCtrl,
        company: this.companyCtrl,
        email: this.emailCtrl,
        phone: this.phoneCtrl,
        message: this.messageCtrl,
        captcha: this.captchaCtrl
    }); 

    

    this.usernCtrl = new FormControl('', [Validators.required]);
    this.pswCtrl = new FormControl('', [Validators.required]);

    this.validateLoginForm= new FormGroup({
      username: this.usernCtrl,
      passw: this.pswCtrl
  });

    
  }

}
