import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HomeService } from '../services/home.service';
import { UserprofileService } from '../services/userprofile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any;
readyToUpload={ };
posts :any;
caption=String;
myposts :any
allUsers:any;
updateUser:any;
friends:any;

  constructor(private AppService: AppService,private HomeService:HomeService,private UserService:UserprofileService) {
    this.fetchAllPost();
   }

  ngOnInit(): void {
    this.fetchUserApi();
    this.fetchAllUsers();
    // this.fetchAllPost();
  }
  getCaption(e:any){
   this.caption=e.target.value
  }
upload(e:any){
  const file = e.target.files[0]
  console.log(e.target.files[0]);
  const CLOUDINARY_UPLOAD_PRESET = "blog_app"
  const URL = "https://api.cloudinary.com/v1_1/dqhh1rff5/image/upload"
  const formData = new FormData();
  formData.append('file',file)
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('cloud_name', 'dqhh1rff5');
  this.HomeService.cloudnary(formData).subscribe((res) => {
    const data= JSON.stringify(res)
    const parsedData = JSON.parse(data);
    
  this.readyToUpload=parsedData.secure_url;
  })
}
postUpload(){
  this.HomeService.postData({caption:this.caption,post_url:this.readyToUpload,posted_by:this.user._id}).subscribe((res)=>{
    console.log(res);
    this.fetchAllPost();
  })
 
}

  fetchUserApi(){
    this.AppService.fetchUser().subscribe((res) => {
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.user = parsedData.user;
      this.UserService.singleUser(this.user._id).subscribe(res=>{
        const data= JSON.stringify(res)
        const parsedData = JSON.parse(data);
        this.updateUser = parsedData.result.message;
        this.friends = this.updateUser.friends.myFriends
        
          })
      
      
    })
  }
  fetchAllPost(){
    this.HomeService.allPost().subscribe((res) => {
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.posts = parsedData.result.data;
      // console.log(this.posts);
      
      this.myposts = this.posts.filter((element:any)=>{
        if(element.posted_by===this.user._id)
        {  
          return element
        }
      })
      console.log(this.myposts);
    })
  
  }
  fetchAllUsers(){

    this.HomeService.allUsers().subscribe((res)=>{
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      // this.allUsers= parsedData.result.data

      this.allUsers= parsedData.result.data.filter((element:any)=>{
        if(element._id !==this.user._id)
        {
          let toggle =false;
          element.friends.myFriends.map((e:any)=>{
            if(e.id===this.user._id){
            toggle=true;
            }
          })
          if(!toggle)
          {
            return element
          }
          
        }
        
      })
      
    })
  }
}
