import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RetrieveService } from '../services/retrieve.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  private page:string = "Deals"
  constructor(private router:Router,private rs:RetrieveService,private ts:Title) { }
  item:any;
  gotoComponent(id:string)
  {
  	console.log("IN COMPONENT")
    this.router.navigate(["/item"]);
     this.rs.getItemData(id).subscribe(data => {
      this.item = data;
      console.log(data);
    });
  }
  ngOnInit() {
    this.ts.setTitle(this.page);
    this.ts.getTitle();
  }
}
