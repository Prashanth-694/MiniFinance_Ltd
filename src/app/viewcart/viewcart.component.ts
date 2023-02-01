import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit{
  products:any;
constructor(private httpClient:HttpClient){

}

ngOnInit(): void {
  let token:any=localStorage.getItem("token");  
  const headers= new HttpHeaders()
    .set('Authorization','Bearer '+token)
  this.httpClient.get("http://localhost:9009/api/v1/services/allProducts",{headers:headers}).subscribe(
    (data) =>{
      console.log(data)
      return this.products=data     
    },
    (error)=>{
      console.log("1>>>ERROR <<<<<");
    }

    )
  
}
}
