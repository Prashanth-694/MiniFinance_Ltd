import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { login } from '../types/loginAndSignUp';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private authService:AuthService,private router:Router){}
  form:login={
    username:'',
    password:''
  }
  
  onSubmit()
  {

    this.authService.authenticate(this.form);
    console.log(this.form);
    this.router.navigate(['/productList']);
  }
}
