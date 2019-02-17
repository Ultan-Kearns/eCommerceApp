import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  constructor(private http:HttpClient) { 
  }
  getUserData():Observable<any>{
  	return this.http.get("http://localhost:8081/api/users");
  }
}
