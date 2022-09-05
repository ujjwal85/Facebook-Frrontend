import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SelfprofileComponent } from './selfprofile/selfprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FirendrequiestComponent } from './firendrequiest/firendrequiest.component';
import { CheckvalideComponent } from './checkvalide/checkvalide.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SelfprofileComponent,
    UserprofileComponent,
    FirendrequiestComponent,
    CheckvalideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
