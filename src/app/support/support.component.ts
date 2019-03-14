import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BugPostService } from '../services/bugpost.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private post:BugPostService) { }

  ngOnInit() {
  }
  onAddBug(form:NgForm)
  {
    console.log(form.value);
  	if(form.valid)
  	{
      //need make id unique
  		this.post.postBug(form.value.title,form.value.content,0).subscribe();
  		form.reset();
  		alert("Bug added we will try to fix soon!");
  	}
  	else{
  		alert("Form Invalid subject must be minimum 5 characters and issue must be 20 characters minimum")
  	}
  }
}
