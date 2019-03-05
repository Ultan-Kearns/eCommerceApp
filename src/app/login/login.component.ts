import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  gotoComponent(){
  	this.router.navigate(["/register"]);
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
