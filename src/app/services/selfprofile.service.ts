import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api="http://localhost:8000/api/auth/login/success"
@Injectable({
  providedIn: 'root'
})
export class SelfprofileService {

  constructor( private http: HttpClient) { }

  fetchUser(){
    return this.http.get(api);
  }

}
