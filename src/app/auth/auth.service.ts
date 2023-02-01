import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../types/loginAndSignUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private httpClient:HttpClient){

}
  isLoggedIn: boolean = false;

  authenticate(form:login) {
this.httpClient.post("http://localhost:9009/api/v1/auth/login",form).subscribe((data:any)=>{
console.log(data.token);
localStorage.setItem('token',data.token)
localStorage.setItem('role',data.userRole[0].authority)
localStorage.setItem('isActive','ACTIVE')
},(error)=>{
  console.log(error);
  
})
    
  }
  isAuthenticated() {
    return localStorage.getItem('login');
  }

}
