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
    else
    {
      alert("Required fields missing");
    }
  }
}
