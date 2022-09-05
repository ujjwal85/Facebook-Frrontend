import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor( private LoginService: LoginService) {}

  ngOnInit(): void {
  
  }

  login(){
    window.open("http://localhost:8000/api/auth/google",'_self')
       
  }

  // getDataFromAPI() {
  //   this.services.getData().subscribe(
  //     (res) => {
  //       console.log('response from api', res);
  //     },
  //     (error) => {
  //       console.log('error is', error);
  //     }
  //   );
  // }
}
