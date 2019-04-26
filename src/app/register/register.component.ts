import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private page:string = "Register";
  constructor(private post:RegisterService,private ts:Title) { }

  ngOnInit() {
    this.ts.setTitle(this.page);
    this.ts.getTitle();
  }
  onAddUser(form:NgForm)
  {
    //check user is 18
  	if(form.valid && parseInt(form.value.age) >= 18)
  	{
  		this.post.registerUser(form.value.age,form.value.name,form.value.email,form.value.address,form.value.password,form.value.email).subscribe();
  		form.reset();
  		alert("User has been added");
  	}
  	else if(parseInt(form.value.age) < 18){
  		alert("Age must be 18 or over");
  	}
    else if(form.value.password.length < 6 || form.value.password.length > 200)
    {
      alert("password must be 6 characters minimum and max 200 characters");
    }
    else if(form.value.address.length < 10 || form.value.address.length > 100) 
    {
      alert("address must be minimum 10 characters and max 50")
    }
    else if(form.value.name < 10 || form.value.name > 50)
    {
      alert("Name must be minimum 10 characters and max 50 characters")
    }
    else
    {
      alert("Email must be valid")
    }
  }
}
