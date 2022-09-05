import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import {fetchUserApi} from './app.component'
import { AuthGuard } from './auth.guard';
import { SelfprofileComponent } from './selfprofile/selfprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FirendrequiestComponent } from './firendrequiest/firendrequiest.component';
import { CheckvalideComponent } from './checkvalide/checkvalide.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'self', component: SelfprofileComponent },
  { path: 'user/:id', component: UserprofileComponent },
  { path: 'friend', component: FirendrequiestComponent },
  { path: 'check', component: CheckvalideComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
