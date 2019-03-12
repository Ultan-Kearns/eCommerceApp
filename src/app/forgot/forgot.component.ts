import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForgotEmailService } from '../services/forgot-email.service'
import { RetrieveService } from '../services/retrieve.service'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  email:string;
  constructor(private fs:ForgotEmailService,private rs:RetrieveService) { }
  ngOnInit() {
  }
  forgot(form:NgForm)
  {
  	if(form.valid)
  	{
      if(this.rs.getUserData(this.email) != null)
      {
  		alert("Email being sent out now")
      this.fs.sendMail(this.email);
      console.log(this.email)
    }
    else{
      alert("Account not found");
    }
  	}
  	else{
  		alert("Please enter email you signed up with")
  	}
  }
}