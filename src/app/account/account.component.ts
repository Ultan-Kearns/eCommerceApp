import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  page:string = "Account"
  constructor(private ts:Title) {
   }

  ngOnInit() {
  	this.ts.setTitle(this.page);
  	this.ts.getTitle();
  }

}
