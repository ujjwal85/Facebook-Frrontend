import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HomeService } from '../services/home.service';
import { UserprofileService } from '../services/userprofile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  readyToUpload = {};
  posts: any;
  caption = String;
  myposts: any;
  allUsers: any;
  updateUser: any;
  friends: any;
  finalPosts: any;
  openCommentBox= false
  postId:any;
  comment:any;

  constructor(
    private AppService: AppService,
    private HomeService: HomeService,
    private UserService: UserprofileService
  ) {}

  ngOnInit(): void {
    this.fetchUserApi();
    this.fetchAllUsers();
    this.fetchAllPost();
  }
  getCaption(e: any) {
    this.caption = e.target.value;
  }
  upload(e: any) {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    const CLOUDINARY_UPLOAD_PRESET = 'blog_app';
    const URL = 'https://api.cloudinary.com/v1_1/dqhh1rff5/image/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('cloud_name', 'dqhh1rff5');
    this.HomeService.cloudnary(formData).subscribe((res) => {
      const data = JSON.stringify(res);
      const parsedData = JSON.parse(data);
      this.readyToUpload = parsedData.secure_url;
    });
  }
  postUpload() {
    this.HomeService.postData({
      caption: this.caption,
      post_url: this.readyToUpload,
      posted_by: this.user._id,
    }).subscribe((res) => {
      console.log(res);
      this.fetchAllPost();
    });
  }

  fetchUserApi() {
    this.AppService.fetchUser().subscribe((res) => {
      const data = JSON.stringify(res);
      const parsedData = JSON.parse(data);
      this.user = parsedData.user;
      this.UserService.singleUser(this.user._id).subscribe((res) => {
        const data = JSON.stringify(res);
        const parsedData = JSON.parse(data);
        this.updateUser = parsedData.result.message;
        this.friends = this.updateUser.friends.myFriends;
      });
    });
  }
  fetchAllPost() {
    console.log('hit');

    let friend: any;
    let posts: any;
    let mixedPost: any[] = [];

    this.HomeService.allPost().subscribe((res) => {
      const data = JSON.stringify(res);
      const parsedData = JSON.parse(data);
      this.posts = parsedData.result.data;

      this.UserService.singleUser(this.user._id).subscribe((res) => {
        const data = JSON.stringify(res);
        const parsedData = JSON.parse(data);
        friend = this.updateUser.friends.myFriends;
        friend.map((e: any) => {
          posts = this.posts.filter((element: any) => {
            if (e.id === element.posted_by._id) {
              mixedPost.push(element);
              return element;
            }
          });
        });

        this.myposts = this.posts
          .filter((element: any) => {
            if (element.posted_by._id === this.user._id) {
              return element;
            }
          })
          .reverse();
        if (posts === undefined || this.myposts === undefined) {
          this.finalPosts = this.myposts;
        } else {
          this.finalPosts = this.myposts.concat(mixedPost);
        }
      });
    });
  }
  fetchAllUsers() {
    this.HomeService.allUsers().subscribe((res) => {
      const data = JSON.stringify(res);
      const parsedData = JSON.parse(data);

      this.allUsers = parsedData.result.data.filter((element: any) => {
        if (element._id !== this.user._id) {
          let toggle = false;
          element.friends.myFriends.map((e: any) => {
            if (e.id === this.user._id) {
              toggle = true;
            }
          });
          if (!toggle) {
            return element;
          }
        }
      });
    });
  }
  like(post: any) {
    this.HomeService.getLike({
      post_details: post,
      userid: this.user._id,
    }).subscribe((res) => {
      this.fetchAllPost();
    });
  }
  love(post: any) {
    this.HomeService.getLove({
      post_details: post,
      userid: this.user._id,
    }).subscribe((res) => {
      this.fetchAllPost();
    });
  }
  openComment(postid:any){
    this.postId=postid
   
    if(this.openCommentBox)
    {
      this.openCommentBox = false
    }
    else{
      this.openCommentBox = true
    }
  }

  getComment(e:any){

    this.comment=e.target.value;
    
  }
  sendComment(postid:any){
    console.log(this.comment);
    this.HomeService.getComment({postid:postid,userid:this.user._id,userpic:this.user.picture,userfirstname:this.user.firstname,userlastname:this.user.lastname,comment:this.comment}).subscribe((res)=>{
      this.fetchAllPost();
      
    })
    
  }
}
