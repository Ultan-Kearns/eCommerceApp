import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RetrieveService } from '../services/retrieve.service';
import{NgForm} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
      private page:string = "Login";
  constructor(private router:Router,private rs:RetrieveService,private ts:Title) { }
  gotoRegister(){
  	this.router.navigate(["/register"]);
  }
    gotoForgot(){
    this.router.navigate(["/forgot"]);
  }
  ngOnInit() {

    this.ts.setTitle(this.page);
    this.ts.getTitle();
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

/*Code to store cookies*/
export function setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

export function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

export function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}
