import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const api="http://localhost:8000/api/auth/login/success"
@Injectable({
  providedIn: 'root'
})
export class AppService {
  serverUrl = environment.serverUrl;
  constructor( private http: HttpClient) { }
  
  
  fetchUser(){
    return this.http.get(`${this.serverUrl}/api/auth/login/success`);
  }

}
