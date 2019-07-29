import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';



declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(500)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class HomeComponent implements OnInit {
  public showloader: boolean = false;      
  private subscription: Subscription;
  private timer: Observable<any>;

  constructor(

  ) { }

  ngOnInit() {
    this.setTimer();
  }

  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  public setTimer(){

    // set showloader to true to show loading div on view
    this.showloader   = true;

    this.timer        = timer(5000); // 5000 millisecond means 5 seconds
    this.subscription = this.timer.subscribe(() => {
        // set showloader to false to hide loading div from view after 5 seconds
        this.showloader = false;
    });
  }
 

  

}
