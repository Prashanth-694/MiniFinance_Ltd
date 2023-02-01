import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-spec-card',
  templateUrl: './spec-card.component.html',
  styleUrls: ['./spec-card.component.css']
})
export class SpecCardComponent implements OnInit{
  constructor(private router : Router,
    private routerA : ActivatedRoute,
    private httpClient:HttpClient,
    private cartService:CartService) {
  }
  productId:any;
  product:any
  role:any
  token:any
 ngOnInit(): void {
  this.routerA.params.subscribe(id => {
    this.productId = id['id'];
  });

  this.token=localStorage.getItem("token");  
  console.log("hhhh",this.token);
  
  this.role=localStorage.getItem("role");
  const headers= new HttpHeaders()
    .set('Authorization','Bearer '+this.token)

  this.httpClient.get(`http://localhost:9009/api/v1/services/getProductById/${this.productId}`,{headers:headers}).subscribe(
    (data) =>{
      console.log(data)
      return this.product=data     
    },
    (error)=>{
      console.log("1>>>ERROR <<<<<",error);
    }

    )
  
 }

 addToCart()
 {

  if(this.product.productType==='CHEQUE_BOOK'){
    this.router.navigate(['/chequeBook'])
  }else{
    this.cartService.addToCart(this.product);
    console.log(this.cartService.getCartItem());
  }


 }

 removeItem()
 {
const headers= new HttpHeaders()
    .set('Authorization','Bearer '+this.token)
    console.log("remove",this.token);
    
  this.httpClient.delete(`http://localhost:9009/api/v1/services/removeItem/${this.productId}`,{headers:headers}).subscribe(
    (data) =>{
      console.log(data)
       this.router.navigate(['/productList'])
    },
    (error)=>{
      console.log(">>>Delete ERROR <<<<<",error);
    }

    )
 }
  specCard()
  {
   
  }
}
