import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api="http://localhost:8000/api/user/allUser"
@Injectable({
  providedIn: 'root'
})
export class FriendrequiestService {

  constructor(private http: HttpClient) { }

  fetchUser(){
    return this.http.get("http://localhost:8000/api/auth/login/success");
  }
  confirmReq(data:any){
    return this.http.post("http://localhost:8000/api/user/confirmRequest",data);
  }
}
