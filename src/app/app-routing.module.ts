import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecCardComponent } from './spec-card/spec-card.component';
import { LoginComponent } from './login/login.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'productList',component:ViewcartComponent},
  {path:'specCard/:id',component:SpecCardComponent},
  {path:'addItem',component:AddItemComponent},
  {path:'chequeBook',component:CartComponent},
  {path: '**', redirectTo: '/login'}

  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
