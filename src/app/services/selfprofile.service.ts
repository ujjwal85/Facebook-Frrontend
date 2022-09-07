import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SelfprofileService {
  serverUrl = environment.serverUrl;

  constructor( private http: HttpClient) { }

  fetchUser(){
    return this.http.get(`${this.serverUrl}/api/auth/login/success`);
  }

}
