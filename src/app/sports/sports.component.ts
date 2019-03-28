import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  private items:any = [];
  constructor(private rs:RetrieveService) { }

  ngOnInit() {
  	  	  	    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
});
  }

}
