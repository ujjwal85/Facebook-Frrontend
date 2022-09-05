import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserprofileService } from '../services/userprofile.service';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  id: any;
  singleData:any;
  user:any;
  friend = false;
  pendingFriend= false;
  
  constructor(private route: ActivatedRoute,private UserService: UserprofileService,private AppService: AppService) { }

  ngOnInit(): void {
    this.fetchUserApi();
    this.id = this.route.snapshot.paramMap.get('id');
    this.singleUser();
   

  }
  fetchUserApi(){
    this.UserService.fetchUser().subscribe((res) => {
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.user = parsedData.user;
      
    })
  }
  singleUser(){
    console.log("entered");
    
    this.UserService.singleUser(this.id).subscribe((res)=>{
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.singleData = parsedData.result.message 
      console.log(this.singleData);
      if(this.singleData.friends.myFriends.length===0)
      {
        this.friend = false;
      }
      this.singleData.friends.myFriends.map((element:any)=>{
           
        if(element.id == this.user._id)
        {        
         this.friend = true;
         throw "break";
        }
        else{
          this.friend = false;
        }
      })

      this.singleData.friends.myFriendRequests.map((element:any)=>{
           
        if(element.id == this.user._id)
        {        
         this.pendingFriend = true;
         throw "break";
        }
        else{
          this.pendingFriend = false;
        }
      })
      
    })
  }

  sendReq(){
    console.log(this.singleData._id);
    console.log(this.user._id)
    this.UserService.sendRequest({userid:this.singleData._id,myid:this.user._id,mypic:this.user.picture,myfirstname:this.user.firstname,mylastname:this.user.lastname,userpic:this.singleData.picture,userfirstname:this.singleData.firstname,userlastname:this.singleData.lastname}).subscribe((res)=>{
      
      this.singleUser();
      
    })
    
  }
  removeReq(){
    this.UserService.deleteRequest({userid:this.singleData._id,myid:this.user._id,mypic:this.user.picture,myfirstname:this.user.firstname,mylastname:this.user.lastname,userpic:this.singleData.picture,userfirstname:this.singleData.firstname,userlastname:this.singleData.lastname}).subscribe((res)=>{
  
      this.singleUser();
    })
  }


}
