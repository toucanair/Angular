import { Component, OnInit, HostListener, Inject,  ViewChild, TemplateRef, ElementRef  } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserModel } from './models/user-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './services/message.service';




declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public navbarOpen;
  

  emailForm : FormGroup;
  nameCtrl: FormControl;
  companyCtrl: FormControl;
  emailCtrl: FormControl;
  phoneCtrl: FormControl;
  messageCtrl: FormControl;
  captchaCtrl: FormControl;
  
  resolved(captchaResponse: string) {
    console.log('Resolved captcha with response: ${captchaResponse}:');
    alert("HOLISme valide")
  }

  onSubmit(){
    
    console.log(this.emailForm.value);
    this.MessageService.sendMessage(this.emailForm.value).subscribe(() => { 
      alert("Mensaje enviado correctamente")})
  };



  Users:Array<UserModel> = [];

  
 

  toggleNavbar() {
      this.navbarOpen=true;
      this.navbarOpen = !this.navbarOpen;
  }
  

  constructor(@Inject(DOCUMENT) 
    document,
    private modalService : BsModalService,
    public MessageService: MessageService
  ){ }
   
 

  modalRef : BsModalRef;
  @ViewChild('template') modal : TemplateRef<any>;

  
  ShowLogin(){
   this.modalRef = this.modalService.show(this.modal);
  }
  HideLogin():void{
    this.modalRef.hide();
  }

  ShowEmail(){
    this.modalRef = this.modalService.show(this.modal);
   }


  ValidateLogin( username, password){
    /*alert(username + " " + password + this.Users.length);*/
    var i = 0;
   /* ConnectString(username,password);*/
   while ( i<=this.Users.length){
      if (username == this.Users[i].Username && password == this.Users[i].Password ){
          alert("Welcome " + this.Users[i].FirstName + " " + this.Users[i].LastName );
          this.HideLogin();
          return true;
      }else{
        i++;
      }
    }
    alert(" Invalid Username ");



  }

  

  ngOnInit(){
    
    this.nameCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.companyCtrl = new FormControl('', Validators.required);
    this.emailCtrl = new FormControl('', [Validators.required, Validators.minLength(10)]);
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

    
    let usersObj = {
      Id: '1',
      FirstName:'Barbara',
      LastName:'Rodrigues',
      Company:'Toucan',
      Phone:'123', 
      Email:'a@g.com',
      Country:'USA', 
      Username:'barb2908', 
      Password: '1234'
      };
    
      let usersObj2 = {
        Id: '2',
        FirstName:'Toucan Air',
        LastName:' LLC',
        Company:'Toucan Air',
        Phone:'123', 
        Email:'a@g.com',
        Country:'USA', 
        Username:'toucan', 
        Password: '0000'
      };
  
    this.Users.push(usersObj);
    this.Users.push(usersObj2);
  
  }

 
  /*
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 0) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  } */
}
