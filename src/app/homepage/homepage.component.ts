import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	private users:any[];
  constructor(private rs:RetrieveService) { 
 
  }
  ngOnInit() {
  	  //get uesrs on intialization
    this.rs.getUserData().subscribe(data => {
      this.users = data;
      console.log("ERROR: ", data)
      console.log("HELLO" + this.users[0]);
    });
  }

}
