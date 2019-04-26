import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {Router} from "@angular/router";
import { environment } from '../environments/environment';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eCommerceApp';

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            let bases = this.document.getElementsByTagName('base');
    
            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    
    if (!isPlatformBrowser(this.platformId)) {
        let bases = this.document.getElementsByTagName('base');

        if (bases.length > 0) {
            bases[0].setAttribute('href', environment.baseHref);
        }
    }

    if (!isPlatformBrowser(this.platformId)) {
        let bases = this.document.getElementsByTagName('base');

        if (bases.length > 0) {
            bases[0].setAttribute('href', environment.baseHref);
        }
    }
}


  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any,   private router:Router){
  	//navigate to homepage on load
  	  this.router.navigate(["/","homepage"])

      //create a global array here ?
      //and just have the items added to the array
      //and added to the cart
  }
}

