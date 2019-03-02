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
  registerUser(age:number,name:string,email:string,address:string,password:string,dateCreated:Date): Observable<any> {
  	const user:User = {age:age,name:name,email:email,address:address,password:password,dateCreated:dateCreated};
  	return this.http.post("http://localhost:8081/api/users/",user);
  }
}
