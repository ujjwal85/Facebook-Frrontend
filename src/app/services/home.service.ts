import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serverUrl = environment.serverUrl;

  constructor( private http: HttpClient) { }

  cloudnary(data:any){
    return this.http.post("https://api.cloudinary.com/v1_1/dqhh1rff5/image/upload",data);
  }
  postData(data:any){
    return this.http.post(`${this.serverUrl}/api/post/uploadPost`,data);
  }
  allPost(){
    return this.http.get(`${this.serverUrl}/api/post/allPost`);
  }
  allUsers(){
    return this.http.get(`${this.serverUrl}/api/user/allUsers`);
  }
  getLike(data:any){
    return this.http.post(`${this.serverUrl}/api/post/like`,data);
  }
  getLove(data:any){
    return this.http.post(`${this.serverUrl}/api/post/love`,data);
  }
  getComment(data:any){
    return this.http.post(`${this.serverUrl}/api/post/comment`,data);
  }
}
