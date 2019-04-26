import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:any = [];
  page:string = "Cart";
  constructor(private rs:RetrieveService, private ts:Title) { }

  ngOnInit() {
    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
    });
  	this.ts.setTitle(this.page);
  	  this.ts.getTitle();
  }

       //buy(){
          //code for the buy will go here
       //}
}
