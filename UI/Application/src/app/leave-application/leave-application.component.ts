import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebServicesService} from '../services/web-services.service';
import {ViewUser} from '../models/viewUser';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {

  userInfo : ViewUser;
  constructor(private _leaveService : WebServicesService)
  {

  }

  ngOnInit() {
  }

}
