import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  page:string = "About";
  constructor(private ts:Title) { }

  ngOnInit() {
  	this.ts.setTitle(this.page);
  	this.ts.getTitle();
  }

}
