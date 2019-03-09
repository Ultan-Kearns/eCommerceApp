import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotEmailService {

  constructor(private http:HttpClient) { }
  sendMail(email:string){
  	 this.http.get("localhost:8081/api/send");
  }
}
