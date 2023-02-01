import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  
  constructor() { }

  setRole(role: string){
    window.localStorage.setItem("role", role);
  }

  getRole(): string | null {
    return window.localStorage.getItem("role");
  }
  getToken(): string | null {
    return window.localStorage.getItem("token");
  }
  isActive(): string | null {
    return window.localStorage.getItem("isActive");
  }
  
}
