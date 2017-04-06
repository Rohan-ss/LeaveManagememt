import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserAuth} from '../models/userAuth';
import {ViewUser} from '../models/viewUser';
import {WebServicesService} from '../services/web-services.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  model = new UserAuth('','');
  UserAuth ={};
  list = [];
  userInfo : ViewUser;
  status : string;
  email : string;
  pwd : string;
  constructor(private _authUser : WebServicesService, private _router : Router)
  {}

  ngOnInit(){}
  onSubmit(f:NgForm)
  {
      this.email = f.form.controls['opcito_email'].value;
      this.pwd = btoa(f.form.controls['password'].value);
    this.UserAuth =
      {
          opcito_email: this.email,
          password: this.pwd
      }

      this._authUser.validateUser(this.UserAuth).subscribe(
          data =>alert(JSON.stringify(this.status=data)),
          error => alert(error),
          ()=>console.log("finish")
      );
          if (this.status=="True")
          {
              alert("condition true")
              this._router.navigate(["home"]);
          }
          else {
            this._router.navigate(["login"]);
          }
  }
}

export class UserInformation
{

}