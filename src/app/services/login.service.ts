import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api="http://localhost:8000/api/auth/google"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  
   }

  loginAPI(){
    return this.http.get(api);
  }

}
