import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SpecCardComponent } from './spec-card/spec-card.component';
import { FooterComponent } from './footer/footer.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewcartComponent,
    ProductcardComponent,
    NavHeaderComponent,
    SpecCardComponent,
    FooterComponent,
    AddItemComponent,
    CartComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
