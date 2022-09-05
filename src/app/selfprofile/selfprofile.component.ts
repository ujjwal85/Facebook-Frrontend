import { Component, OnInit } from '@angular/core';
import { SelfprofileService } from '../services/selfprofile.service';

@Component({
  selector: 'app-selfprofile',
  templateUrl: './selfprofile.component.html',
  styleUrls: ['./selfprofile.component.css']
})
export class SelfprofileComponent implements OnInit {
  user: any;

  constructor(private SelfServices: SelfprofileService) { }

  ngOnInit(): void {
    this.self();
  }

  self(){
    this.SelfServices.fetchUser().subscribe(res=>{
      const data= JSON.stringify(res)
      const parsedData = JSON.parse(data);
      this.user = parsedData.user;
      console.log(res);
      
    })
  }

}
