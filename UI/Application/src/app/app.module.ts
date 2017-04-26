import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {} from 'ang';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WebServicesService} from '../services/web-services.service';
import { MaterialModule } from '@angular/material';
import {routing} from './app.routes';
import { AppComponent } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoginComponent } from './login/login.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HandleLeaveComponent } from './handle-leave/handle-leave.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeaveApplicationsComponent } from './leave-applications/leave-applications.component';
import { HomeComponent } from './home/home.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateLeaveTypeComponent } from './create-leave-type/create-leave-type.component';
import { HandleLeavesByLeadComponent } from './handle-leaves-by-lead/handle-leaves-by-lead.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewUsersComponent,
    RegisterUserComponent,
    UpdateUserComponent,
    LeaveApplicationComponent,
    HandleLeaveComponent,
    TopNavComponent,
    LeaveApplicationsComponent,
    HomeComponent,
    CreateRoleComponent,
    CreateLeaveTypeComponent,
    HandleLeavesByLeadComponent,
    HolidayCalendarComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
