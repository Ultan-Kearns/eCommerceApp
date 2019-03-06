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
  gotoRegister(){
  	this.router.navigate(["/register"]);
  }
    gotoForgot(){
    this.router.navigate(["/forgot"]);
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
