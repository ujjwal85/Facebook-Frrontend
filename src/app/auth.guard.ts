import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './services/app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data ={};
  newObj:any ;
  user:any;
  loggedIn:any;
  checkUser:any;

  constructor( private AppService: AppService,private router: Router){ }
  
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    
     this.newObj = window.sessionStorage.getItem("myval");
     this.user=  JSON.parse(this.newObj)
     console.log(this.user);
     
     if(this.user==null)
     {
      this.router.navigate(['/login']);
      
      
      return false;
     }
     else{
      
      return true;
     }
  }
  
}
