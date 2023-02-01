import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../jwt.service';
import { CartService } from '../spec-card/cart.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

constructor(private jwt: JwtService ,private cartService:CartService,private router:Router){}

role: string | null = "";
isActive:string | null="";

  ngOnInit(): void {
    this.role = this.jwt.getRole();
    this.isActive = this.jwt.isActive();
    console.log(this.isActive)
  }

  getCart()
  {
    return this.cartService.getCartItem();
  }
  
  logOut(){
window.localStorage.clear()
this.router.navigate(['/login'])
  }
}
