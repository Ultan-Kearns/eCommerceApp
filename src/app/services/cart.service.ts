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

    

}