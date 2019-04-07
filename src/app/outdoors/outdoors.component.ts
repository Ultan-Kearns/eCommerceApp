import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-outdoors',
  templateUrl: './outdoors.component.html',
  styleUrls: ['./outdoors.component.scss']
})
export class OutdoorsComponent implements OnInit {
  private items:any = [];
  private page:string = "Outdoors";
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
