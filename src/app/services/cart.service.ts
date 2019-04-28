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

    addToCart(_id:number,price:Number,dateCreated:String,itemID:Number,userID:String): Observable<any> {
        const order:cart = {_id:_id,itemID,price:price,dateCreated:dateCreated,userID};
        return this.http.post("http://localhost:8081/api/cart/",order);
    }

}