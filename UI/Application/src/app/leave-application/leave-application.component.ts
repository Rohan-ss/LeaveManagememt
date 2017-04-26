import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {WebServicesService} from '../../services/web-services.service';
import {Router} from '@angular/router';
import {ViewUser} from '../models/viewUser';
import {NgForm} from '@angular/forms';
import {Leaves} from '../models/Leaves';
import {Lead} from '../models/user';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {
  userId: any;
  data = {};
  diffDays: any;
  total_days: any;
  lead: Lead[];
  from_date: any;
  to_date: any;
  selectedValue: any;
  userData: ViewUser[];
  leaveType: Leaves[];
  constructor(private _router: Router,
              private localStorageService: LocalStorageService,
              private userService: WebServicesService ) {
    this.userId = localStorage.getItem('id');
    this. userService.getUser(this.userId).subscribe(data => this.userData = data);
    this.userService.getLeaveType().subscribe(data => this.leaveType = data);
    this.userService.getAllLead().subscribe(data => this.lead = data);
  }
  ngOnInit() {
  }
  onDropdownChange(e){
    this.selectedValue =e
  }
  dateConvert(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join(',');
  }

  onchange(f: NgForm){
      this.from_date = f.form.controls['from_date'].value;
      this.to_date = f.form.controls['to_date'].value;
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date(this.from_date);
      const secondDate = new Date(this.to_date);
      this.diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
      this.total_days = this.diffDays;

  }
  onSubmit(f: NgForm) {
    this.data = {
      employee_id: this.userId,
      reason: f.form.controls['reason'].value,
      from_date: this.from_date,
      to_date: this.to_date,
      total_days: this.total_days,
      approval_person: this.selectedValue,
      leave_type_id: f.form.controls['type'].value};
    this.userService.leaveApplication(this.data).subscribe(
        data => alert( JSON.stringify(data)),
        error => alert(error),
        () => console.log('finish')
    );
  }
}
