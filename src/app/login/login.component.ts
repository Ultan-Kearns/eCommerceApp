import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RetrieveService } from '../services/retrieve.service';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private rs:RetrieveService) { }
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
      this.rs.getUserData(form.value.email);
  	}
  	else{
  		alert("not working")
  	}
  }
}
