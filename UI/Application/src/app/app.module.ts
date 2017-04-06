import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CoolHttpModule} from 'angular2-cool-http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routes';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {WebServicesService} from'./services/web-services.service';
import { ViewUsersComponent } from './view-users/view-users.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HandleLeaveComponent } from './handle-leave/handle-leave.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopnavComponent,
    HomeComponent,
    RegisterUserComponent,
    UpdateUserComponent,
    ViewUsersComponent,
    LeaveApplicationComponent,
    HandleLeaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      MaterialModule,
    routing,
      CoolHttpModule
  ],
  providers: [WebServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
