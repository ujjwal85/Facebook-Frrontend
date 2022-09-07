import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendrequiestService {
  serverUrl = environment.serverUrl;
  constructor(private http: HttpClient) { }

  fetchUser(){
    return this.http.get(`${this.serverUrl}/api/auth/login/success`);
  }
  confirmReq(data:any){
    return this.http.post(`${this.serverUrl}/api/user/confirmRequest`,data);
  }
}
