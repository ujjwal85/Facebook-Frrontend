import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  serverUrl = environment.serverUrl;
  constructor(private http: HttpClient) { }
  fetchUser(){
    return this.http.get(`${this.serverUrl}/api/auth/login/success`);
  }
  singleUser(id:any){
    return this.http.get(`${this.serverUrl}/api/user/singleUser/${id}`);
  }
  sendRequest(data:Object){
    return this.http.post(`${this.serverUrl}/api/user/sendRequest`,data);

  }
  deleteRequest(data:Object)
  {
    return this.http.post(`${this.serverUrl}/api/user/deleteRequest`,data);
    
  }
 
}
