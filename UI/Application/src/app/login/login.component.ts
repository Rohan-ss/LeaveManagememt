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
  auth_data: UserAuth;
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
        data => {
                    if (data) {
                        JSON.stringify(data)
                         localStorage.setItem('id',data['id'])
                        localStorage.setItem('role',data['role'])
                        localStorage.setItem('token',data['token'])
                        this._router.navigate(['home']);

                        // console.log(this._authUser.getUserId());
                    }
        },(error:any) => alert(error)
    );
  }

}

