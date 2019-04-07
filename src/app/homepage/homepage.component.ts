import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
import{Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	private users:any[];
  constructor(private rs:RetrieveService,private router:Router,private ts:Title) { 
           console.log("USERS : " + this.users);
  }
  ngOnInit() {
  	  //get uesrs on intialization
    this.rs.getUsersData().subscribe(data => {
      this.users = data;
    });
    this.ts.setTitle("Home");
    this.ts.getTitle();
  }
      gotoElectronics(){
    this.router.navigate(["/electronics"]);
  }
      gotoSports(){
    this.router.navigate(["/sports"]);
  }
      gotoOutdoors(){
    this.router.navigate(["/outdoors"]);
  }
      gotoBooks(){
    this.router.navigate(["/books"]);
  }
}
