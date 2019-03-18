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
  	if(form.valid)
  	{
  		alert("Email being sent out now");
      this.rs.getUserData(form.value.email).subscribe(data => {
      console.log(data);
      alert("Email sent to: " + form.value.email)
    });
    }
  }
}