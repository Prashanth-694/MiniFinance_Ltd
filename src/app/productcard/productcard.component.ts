import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {

@Input() product:any = {};
constructor(private router:Router) {
}


moreInfo(){
  console.log("hhj  jhj",this.product.id);
  console.log(this.product.productImage);
  
   this.router.navigate(['specCard/'+this.product.id]);
}

}
