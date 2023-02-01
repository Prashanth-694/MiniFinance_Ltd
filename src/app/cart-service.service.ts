import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  product:any=[];
  constructor(private httpClient: HttpClient) { 
    

  }

  
    
}
