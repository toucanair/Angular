import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number = 26.255796;
  longitude: number = -80.163417;

  
 

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

  constructor(public MessageService: MessageService)  {   }

  contactForm(form){
    console.log(form);
    this.MessageService.sendMessage(form).subscribe(() => {
      alert("Mensaje enviado correctamente");
    })
  }

  ngOnInit() {
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
  }

}
