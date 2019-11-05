import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting, routingComponents } from './app.routing';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopoverModule } from 'ngx-smart-popover';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';
import { RegisterService } from './services/register.service';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PopoverModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdm1demIJQoIhp41B6C5zSSsud_xtn8Uc'
    })
  ],
  providers: [
    MessageService,
    RegisterService,
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
