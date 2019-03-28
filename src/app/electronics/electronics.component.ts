import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
  private items:any = [];
  constructor(private rs:RetrieveService) { }

  ngOnInit() {
  	    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
});
  }

}
