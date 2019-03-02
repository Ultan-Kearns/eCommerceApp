import { Component, OnInit } from '@angular/core';
import { Register } from '../services/register.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  onAddUser(form:NgForm)
  {
    console.log(form.value);
  	if(form.valid)
  	{
  		this.post.registerUser(form.value.age,form.value.name,form.value.email,form.value.address,form.value.password).subscribe();
  		form.reset();
  		alert("Bug added we will try to fix soon!");
  	}
  	else{
  		alert("Form Invalid email must be valid and password must be > 5 characters minimum")
  	}
  }
}
