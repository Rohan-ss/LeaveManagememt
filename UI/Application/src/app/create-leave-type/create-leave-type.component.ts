import { Component, OnInit } from '@angular/core';
import {WebServicesService} from '../../services/web-services.service';
import {Leaves} from '../models/Leaves';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-leave-type',
  templateUrl: './create-leave-type.component.html',
  styleUrls: ['./create-leave-type.component.css']
})
export class CreateLeaveTypeComponent implements OnInit {
  leaveType: Leaves[];
  leave_type: string;
  constructor(private leaveInfo: WebServicesService,
              private router: Router) {
    this.leaveInfo.getLeaveType().subscribe(data => JSON.stringify(this.leaveType = data));
  }
  ngOnInit() {
  }
  onSubmit(f: NgForm){
    const data = {
      leave_type: this.leave_type
    };
    JSON.stringify(data);
    this.leaveInfo.createLeaveType(data).subscribe(data =>  JSON.stringify(data),
        error => alert(error),
        () => console.log('finish'));
    this.leaveInfo.getLeaveType().subscribe(data => JSON.stringify(this.leaveType = data));

  }
}
