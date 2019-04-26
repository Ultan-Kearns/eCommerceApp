import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
  items:any = [];
  private page:string = "Electronics"
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
