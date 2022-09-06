import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  cloudnary(data:any){
    return this.http.post("https://api.cloudinary.com/v1_1/dqhh1rff5/image/upload",data);
  }
  postData(data:any){
    return this.http.post("http://localhost:8000/api/post/uploadPost",data);
  }
  allPost(){
    return this.http.get("http://localhost:8000/api/post/allPost");
  }
  allUsers(){
    return this.http.get("http://localhost:8000/api/user/allUsers");
  }
  getLike(data:any){
    return this.http.post("http://localhost:8000/api/post/like",data);
  }
  getLove(data:any){
    return this.http.post("http://localhost:8000/api/post/love",data);
  }
}
