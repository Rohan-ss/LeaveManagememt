import { Component, OnInit } from '@angular/core';
import {WebServicesService} from '../../services/web-services.service';
import {LeaveInfo} from '../models/Leaves';
import {Router} from '@angular/router';
@Component({
  selector: 'app-leave-applications',
  templateUrl: './leave-applications.component.html',
  styleUrls: ['./leave-applications.component.css']
})
export class LeaveApplicationsComponent implements OnInit {
  record: LeaveInfo[];
  userid: string;
  constructor( private leaveRecords: WebServicesService,
                private _router: Router) {
    const uId = localStorage.getItem('id');
    this.leaveRecords.getAllLeaves().subscribe(
        posts => this.record = posts);

  }

  ngOnInit() {
  }
  updateUser(id) {
    this.userid = id;
    this._router.navigate(['handleLeave', id]);

  }
}
