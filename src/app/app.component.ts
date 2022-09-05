import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'facebook';
  data = {};
  constructor( private AppService: AppService) {}
  ngOnInit(): void {
   this.fetchUserApi();
  }
  fetchUserApi(){
    // this.AppService.fetchUser().subscribe((res) => {
    //   this.data = res;
    //   sessionStorage.setItem("myval",JSON.stringify(this.data));
    //   console.log(this.data);
    //   return res;

    // })

   
    
    
  }
  
  
}