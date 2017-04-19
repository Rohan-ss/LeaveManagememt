import { Component, OnInit } from '@angular/core';
import {LeaveInfo} from "../models/Leaves";
import {WebServicesService} from "../../services/web-services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-handle-leaves-by-lead',
  templateUrl: './handle-leaves-by-lead.component.html',
  styleUrls: ['./handle-leaves-by-lead.component.css']
})
export class HandleLeavesByLeadComponent implements OnInit {
  record: LeaveInfo[];
  userid: string;
  constructor( private leaveRecords: WebServicesService,
               private _router: Router) {
    const uId = localStorage.getItem('id');
    this.leaveRecords.getAllLeavesByLead(uId).subscribe(
        posts => this.record = posts);

  }

  ngOnInit() {
  }
  updateUser(id) {
    this.userid = id;
    this._router.navigate(['handleLeave', id]);

  }

}
