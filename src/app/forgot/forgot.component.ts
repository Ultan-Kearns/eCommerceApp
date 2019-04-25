import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RetrieveService } from '../services/retrieve.service'

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  private page:string = "Forgot";
  constructor(private rs:RetrieveService,private ts:Title) { }
  ngOnInit() {
    this.ts.setTitle(this.page);
    this.ts.getTitle();
  }
  forgot(form:NgForm)
  {
    if(form.valid)
    {
  	if(form.value.email != null)
  	{
  		alert("Email being sent out now");
      this.rs.getUserData(form.value.email).subscribe(data => {
      console.log(data);
      if(form.value.email != data.email)
      alert("Email does not exist on account")
      else{  
      alert("Email sent to: " + form.value.email)
    }
    });
    }
  }
      else{
      alert("Must be valid Email")
    }
  }
}