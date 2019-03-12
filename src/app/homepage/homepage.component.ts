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
           console.log("USERS : " + this.users);
  }
  ngOnInit() {
  	  //get uesrs on intialization
    this.rs.getUsersData().subscribe(data => {
      this.users = data;
    });
  }
}
