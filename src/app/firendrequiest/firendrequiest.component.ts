import { Component, OnInit } from '@angular/core';
import { FriendrequiestService } from '../services/friendrequiest.service';
import { UserprofileService } from '../services/userprofile.service';

@Component({
  selector: 'app-firendrequiest',
  templateUrl: './firendrequiest.component.html',
  styleUrls: ['./firendrequiest.component.css']
})
export class FirendrequiestComponent implements OnInit {
 user:any;
 pendingReq:any;
 friendReq:any;
 updateUser:any;
  constructor(private FriendService:FriendrequiestService, private UserService:UserprofileService) { }

  ngOnInit(): void {
    this.userdata();
  }
  userdata(){
   this.FriendService.fetchUser().subscribe(res=>{
    const data= JSON.stringify(res)
    const parsedData = JSON.parse(data);
    this.user = parsedData.user;
  

    this.UserService.singleUser(this.user._id).subscribe(res=>{
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.updateUser = parsedData.result.message;
      this.friendReq = this.updateUser.friends.myFriendRequests;
      this.pendingReq = this.updateUser.friends.mySentRequests;
        })
   })
  }
  acceptReq(user:any){
    console.log(user);
    this.FriendService.confirmReq({userid:user.id,userpic:user.pic,userfirstname:user.firstname,userlastname:user.lastname,myid:this.user._id,mypic:this.user.picture,myfirstname:this.user.firstname,mylastname:this.user.lastname}).subscribe(res=>{
      this.userdata();
    
    })
  }
}
