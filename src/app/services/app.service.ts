import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api="http://localhost:8000/api/auth/login/success"
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  fetchUser(){
    return this.http.get(api);
  }

}
