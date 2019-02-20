import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bug } from '../models/bug.model';
@Injectable({
  providedIn: 'root'
})
export class BugPostService {

  constructor(private http:HttpClient) { 
  }
  //post bug
  postBug(subject:string,issue:string): Observable<any> {
  	const bug:Bug ={subject:subject,issue:issue};
  	return this.http.post("localhost:8081/api/bugs",bug);
  }
}
