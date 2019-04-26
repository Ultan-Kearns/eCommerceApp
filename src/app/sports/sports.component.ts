import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  items:any = [];
  private page:string = "Sports";
  constructor(private rs:RetrieveService,private ts:Title) { }

  ngOnInit() {
  	  	  	    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
});
    this.ts.setTitle(this.page);
    this.ts.getTitle();
  }

}
