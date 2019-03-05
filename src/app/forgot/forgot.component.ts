import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  forgot(form:NgForm)
  {
  	if(form.valid)
  	{
  		alert("Email being sent out now")
  	}
  	else{
  		alert("Please enter email you signed up with")
  	}
  }
}
