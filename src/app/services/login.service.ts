import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) {
  
   }

  loginAPI(){
    return this.http.get(`${this.serverUrl}/api/auth/google`);
  }

}
