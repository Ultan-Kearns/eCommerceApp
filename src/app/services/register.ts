import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class Register {

  constructor(private http:HttpClient) { 
  }
  //register user
  registerUser(id:string,name:string,age:string,dateCreated:string): Observable<any> {
  	const user:User = {id:id,name:name,age:age,dateCreated:dateCreated};
  	return this.http.post("http://localhost:8081/api/users/",user);
  }
}
