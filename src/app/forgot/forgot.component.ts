import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RetrieveService } from '../services/retrieve.service'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  constructor(private rs:RetrieveService) { }
  ngOnInit() {
  }
  forgot(form:NgForm)
  {
  	if(form.valid && form.value.email != null)
  	{
  		alert("Email being sent out now");
      this.rs.getUserData(form.value.email).subscribe(data => {
      console.log(data);
      if(data == null)
      alert("Email does not exist on account")
      else{  
      alert("Email sent to: " + form.value.email)
    }
    });
    }
    else{
      alert("Email cannot be blank")
    }
  }
}