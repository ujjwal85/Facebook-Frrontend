import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api="http://localhost:8000/api/user/allUser"
@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http: HttpClient) { }
  fetchUser(){
    return this.http.get("http://localhost:8000/api/auth/login/success");
  }
  singleUser(id:any){
    return this.http.get(`http://localhost:8000/api/user/singleUser/${id}`);
  }
  sendRequest(data:Object){
    return this.http.post("http://localhost:8000/api/user/sendRequest",data);

  }
  deleteRequest(data:Object)
  {
    return this.http.post("http://localhost:8000/api/user/deleteRequest",data);
    
  }
 
}
