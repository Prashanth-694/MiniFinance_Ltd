import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../jwt.service';
import { AddProduct } from '../types/AddProduct';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  constructor(private router:Router,private httpClient:HttpClient,private jwt:JwtService){}
  form:AddProduct={
    productName:'',
    productType:'',
    productDescription:'',
    productImage:'',
    productCharge:0,
  }

  token: string | null = "";

  ngOnInit(): void {
    this.token = this.jwt.getToken();
    console.log(this.token)
  }

  onSubmit()
  {
    console.log(this.form);
    const headers= new HttpHeaders()
    .set('Authorization','Bearer '+this.token)
    console.log("addToken",this.token);
    
  this.httpClient.post(`http://localhost:9009/api/v1/services/saveProduct/52`,this.form,{headers:headers}).subscribe(
    (data) =>{
      console.log(data)
       this.router.navigate(['/productList'])
    },
    (error)=>{
      console.log(">>>Delete ERROR <<<<<",error);
    }

    )

  }
}
