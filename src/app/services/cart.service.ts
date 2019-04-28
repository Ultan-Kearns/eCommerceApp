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

    addToCart(Name:String, Price:Number): Observable<any> {
        const order:cart = {Name:Name,Price:Price};
        return this.http.post("http://localhost:8081/api/cart/",order);
    }

}