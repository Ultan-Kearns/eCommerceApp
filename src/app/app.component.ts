import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eCommerceApp';

  constructor(  private router:Router){
  	//navigate to homepage on load
  	  this.router.navigate(["/","homepage"])

      //create a global array here ?
      //and just have the items added to the array
      //and added to the cart
  }
}

