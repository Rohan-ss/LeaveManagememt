import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebServicesService} from '../../services/web-services.service';
import {ViewUser} from '../models/viewUser';
import {NgForm} from '@angular/forms';
import {LeaveInfo} from "../models/Leaves";
@Component({
  selector: 'app-handle-leave',
  templateUrl: './handle-leave.component.html',
  styleUrls: ['./handle-leave.component.css']
})
export class HandleLeaveComponent implements OnInit {
  userData: LeaveInfo[];
  data = {};
  userId: string;
  status: string;
  constructor(private route: ActivatedRoute, private _updateService: WebServicesService) {
    this.userId = route.snapshot.params['id'];
    this. _updateService.getUserLeaveInfo(this.userId).subscribe(data => this.userData = data);

  }
  approve() {
    this.status = 'Approved';
  }
  reject() {
    this.status = 'Rejected';
  }
    onSubmit(f: NgForm) {
      this.data = {
        id: this.userId,
        status: this.status
      };
      const data = JSON.stringify(this.data);
      this._updateService.updateLeaveStatus(data)
          .subscribe(data => alert( JSON.stringify(data)),
              error => alert(error),
              () => console.log('finish')
          );
  }
  ngOnInit() {
  }

}
