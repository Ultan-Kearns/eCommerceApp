import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
import {CartService} from '../services/cart.service';

import { Title } from '@angular/platform-browser';
import { CssKeyframesDriver } from '@angular/animations/browser/src/render/css_keyframes/css_keyframes_driver';



@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
  items:any = [];
  private page:string = "Electronics"
  constructor(private cs:CartService,private rs:RetrieveService ,private ts:Title) { }

  ngOnInit() {
  	    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
});
    this.ts.setTitle(this.page);
    this.ts.getTitle();

    for(let i = 0; i <this.items.length; i++)
    {
      //cs.addtocart(items)

    }

    

  }
  
}
  

  
  


  

}
