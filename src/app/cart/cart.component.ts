import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  page:string = "Cart";
  constructor(private ts:Title) { }

  ngOnInit() {
  	this.ts.setTitle(this.page);
  	  this.ts.getTitle();

      buy(){
          //code for the buy will go here
      }

  }

}
