import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	x:string
  constructor(private router:Router) { }
  gotoComponent(x:string){
  	this.x = x;
  	this.router.navigate(["/"] + x);
  }
  ngOnInit() {
  }
  login(form:NgForm)
  {
  	if(form.valid)
  	{
  		alert("works")
  	}
  	else{
  		alert("not working")
  	}
  }
}
