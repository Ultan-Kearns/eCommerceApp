import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	private users:any[];
  constructor(private rs:RetrieveService,private router:Router) { 
           console.log("USERS : " + this.users);
  }
  ngOnInit() {
  	  //get uesrs on intialization
    this.rs.getUsersData().subscribe(data => {
      this.users = data;
    });
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
