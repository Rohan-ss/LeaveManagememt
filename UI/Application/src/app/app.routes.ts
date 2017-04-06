import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {ViewUsersComponent} from './view-users/view-users.component';
import {LeaveApplicationComponent} from './leave-application/leave-application.component';
import {TopnavComponent} from './topnav/topnav.component';
const appRoutes : Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'home', component: HomeComponent},
    {path : 'registerUser', component: RegisterUserComponent},
    {path : 'updateUser/:id', component: UpdateUserComponent},
    {path : 'viewUsers', component : ViewUsersComponent},
    {path : 'applyLeave', component: LeaveApplicationComponent},
    {path : 'topNav', component: TopnavComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
