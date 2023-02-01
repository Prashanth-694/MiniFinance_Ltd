import { Injectable } from '@angular/core';
import { CartItem } from '../types/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
cart:Array<CartItem>=[];


  addToCart(product:CartItem){
    return this.cart.push(product)
  }

  getCartItem(){
return this.cart;
  }

  removeCartItem(cartItem:CartItem)
  {
    return this.cart=this.cart.filter(item=> item!==cartItem)
  }
}
