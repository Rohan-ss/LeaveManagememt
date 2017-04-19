import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {NgForm} from '@angular/forms';
import {WebServicesService} from '../../services/web-services.service';
import {ViewUser} from '../models/viewUser';
import {Router} from '@angular/router';
import {UserAuth} from '../models/userAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserAuth1 = {};
  email: string;
  pwd: string;
  userId: string;
  userInfo: UserAuth[];
  status: boolean ;
  constructor(private _authUser: WebServicesService,
              private localStorageService: LocalStorageService,
              private _router: Router) {}

  ngOnInit() {

  }

  onSubmit(f: NgForm) {
    this.email = f.form.controls['opcito_email'].value;
    this.pwd = btoa(f.form.controls['password'].value);
    this.UserAuth1 = {
          opcito_email: this.email,
          password: this.pwd
        };
    this._authUser.validateUser(this.UserAuth1).subscribe(
        data => localStorage.setItem('uid', JSON.stringify(data)) ,
        error => alert(error),
        () => console.log('finish')
  );
    try {
      const currentUser = JSON.parse(localStorage.getItem('uid'));
      var userImfo = currentUser.id;
      const token = currentUser.token;
      const role = currentUser.role;
      localStorage.setItem('id', userImfo);
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
    } catch (Exception) {
      console.log(Exception);
    }
    if (userImfo) {
      this._router.navigate(['home']);
    } else {
      this._router.navigate(['login']);
    }
  }
}

