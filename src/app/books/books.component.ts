import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  private item:any = [];
  constructor(private rs:RetrieveService) { }

  ngOnInit() {
  	  	    //get items on load
    this.rs.getItemsData().subscribe(data => {
      this.items = data;
});
  }

}
