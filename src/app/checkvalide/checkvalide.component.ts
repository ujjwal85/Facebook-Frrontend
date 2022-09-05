import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkvalide',
  templateUrl: './checkvalide.component.html',
  styleUrls: ['./checkvalide.component.css']
})
export class CheckvalideComponent implements OnInit {
data:any
  constructor( private AppService: AppService,private router: Router) { }

  ngOnInit(): void {
    this.checkUser();
  }
  checkUser(){
    this.AppService.fetchUser().subscribe((res) => {
      const data = JSON.stringify(res);
      const parsed = JSON.parse(data);
      if(parsed.success===true)
      {
        console.log("found");
        console.log(res);
        this.data= res;
        sessionStorage.setItem("myval",JSON.stringify(this.data));
        const newObj = window.sessionStorage.getItem("myval");
        console.log(newObj);
        this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/login']);
      }
    });
  }

}
