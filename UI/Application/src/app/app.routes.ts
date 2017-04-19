import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {ViewUsersComponent} from './view-users/view-users.component';
import {LeaveApplicationComponent} from './leave-application/leave-application.component';
import {LeaveApplicationsComponent} from './leave-applications/leave-applications.component';
import {HandleLeaveComponent} from './handle-leave/handle-leave.component';
import {HomeComponent} from './home/home.component';
import {CreateRoleComponent} from './create-role/create-role.component';
import {CreateLeaveTypeComponent} from './create-leave-type/create-leave-type.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {HandleLeavesByLeadComponent} from './handle-leaves-by-lead/handle-leaves-by-lead.component';
const appRoutes: Routes = [
    {path : '' , redirectTo : 'login', pathMatch: 'full'},
    {path : 'login', component: LoginComponent},
    {path : 'registerUser', component: RegisterUserComponent},
    {path : 'updateUser/:id', component: UpdateUserComponent},
    {path : 'viewUsers', component : ViewUsersComponent},
    {path : 'applyLeave', component: LeaveApplicationComponent},
    {path : 'LeaveApplications', component: LeaveApplicationsComponent},
    {path : 'handleLeave/:id', component: HandleLeaveComponent},
    {path : 'home', component: HomeComponent},
    {path : 'createRole', component: CreateRoleComponent},
    {path : 'createLeaveType', component: CreateLeaveTypeComponent},
    {path : 'topNav', component: TopNavComponent},
    {path : 'applyLeave', component: LeaveApplicationComponent},
    {path : 'LeaveApplication1', component: HandleLeavesByLeadComponent}
    ];
export const routing = RouterModule.forRoot(appRoutes);

