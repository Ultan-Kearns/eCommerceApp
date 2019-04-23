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
  getUsersData():Observable<any>{
  	return this.http.get("http://localhost:8081/api/users");
  }
  getOrderData():Observable<any>{
  	return this.http.get("http://localhost:8081/api/orders");
  }
  getReviewData():Observable<any>{
  	return this.http.get("http://localhost:8081/api/reviews");
  }
  getItemsData():Observable<any>{
  	return this.http.get("http://localhost:8081/api/items");
  }
  //for specific item
  getItemData(id:string):Observable<any>{
    return this.http.get("http://localhost:8081/api/items" + id);
  }
    //for specific user
  getUserData(email:string):Observable<any>{
    return this.http.get("http://localhost:8081/api/users/" + email);
  }
loginUser (email:string,password:string):Observable<any>{
    return this.http.get("http://localhost:8081/api/users/" + email);
  }
}