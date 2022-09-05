import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { UserprofileService } from '../services/userprofile.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
data= {success:false}
user:any;
updatedUser:any;
  constructor( private AppService: AppService,private UserService:UserprofileService) { }

  ngOnInit(): void {
    this.fetchUserApi();
  }
  fetchUserApi(){
    this.AppService.fetchUser().subscribe((res) => {
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.user = parsedData.user;
      this.UserService.singleUser(this.user._id).subscribe(res=>{
        const data= JSON.stringify(res)
        const parsedData = JSON.parse(data);
        this.updatedUser = parsedData.result.message;

          })
    })
  }
  

  logout(){
   
    // sessionStorage.setItem("myval",JSON.stringify(this.data));
    sessionStorage.clear();
    window.open("http://localhost:8000/api/auth/logout",'_self')
    
  }

}
