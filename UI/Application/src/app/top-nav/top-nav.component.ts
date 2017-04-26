import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from '@angular/router';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  hiddenn: boolean;
  role: string;
  leadUser: string;
  hrUser: string;
  adminUser: string;
  softwareEmgineer: string;
  constructor(private _router: Router,
              private localStorageService: LocalStorageService) {
    this.leadUser = 'Lead';
    this.hrUser = 'HR Manager';
    this.adminUser = 'Admin';
    this.softwareEmgineer = 'Software engineer'
    const token = localStorage.getItem('token');
    if (token != null) {
      this.hiddenn = true;
       this.role = localStorage.getItem('role');
    } else {
      this.hiddenn = false;
    }
  }
  ngOnInit() {

  }
  logout() {
    localStorage.clear();
    this.hiddenn = false;
    this._router.navigate(['login']);
  }
}
