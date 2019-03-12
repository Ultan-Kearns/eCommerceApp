import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 
  }
  //register user
  registerUser(age:number,name:string,email:string,address:string,password:string,_id:string): Observable<any> {
  	const user:User = {age:age,name:name,email:email,address:address,password:password,_id:_id};
  	return this.http.post("http://localhost:8081/api/users/",user);
  }
}
