import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cart } from '../models/cart.model';
@Injectable({
    providedIn: 'root'
  })
export class CartService{
    constructor(private http:HttpClient) { 
    }

    addToCart(_id:number,price:Number,dateCreated:String): Observable<any> {
        const order:cart = {_id:_id,price:price,dateCreated:dateCreated};
        return this.http.post("http://localhost:8081/api/users/",order);
    }

}