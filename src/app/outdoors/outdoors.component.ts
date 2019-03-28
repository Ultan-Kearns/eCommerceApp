import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
@Component({
  selector: 'app-outdoors',
  templateUrl: './outdoors.component.html',
  styleUrls: ['./outdoors.component.scss']
})
export class OutdoorsComponent implements OnInit {
  private items:any = [];
  constructor(private rs:RetrieveService) { }

  ngOnInit() {
  	  	    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
});
  }

}
