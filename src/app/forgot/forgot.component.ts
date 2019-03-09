import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForgotEmailService } from '../services/forgot-email.service'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  email:string;
  constructor(private fs:ForgotEmailService) { }
  ngOnInit() {
  }
  forgot(form:NgForm)
  {
  	if(form.valid)
  	{
  		alert("Email being sent out now")
      this.fs.sendMail(this.email);
  	}
  	else{
  		alert("Please enter email you signed up with")
  	}
  }
}