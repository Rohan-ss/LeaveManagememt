import { Component, OnInit } from '@angular/core';
import {ViewUser} from '../models/viewUser';
import {Router} from '@angular/router';
import {WebServicesService} from '../services/web-services.service';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  user: ViewUser[];
  userid: string;
  constructor(private _userService : WebServicesService, private _router : Router)
  {
      /*this._userService.getAllUser().subscribe(
      posts=> this.user = posts);*/
      console.log(this._userService.getUsers())
  }
  deleteUser(id) {
    this._userService.deleteUser(id).subscribe(data=> location.reload());
  }

  updateUser(id){
    this.userid=id;
    this._router.navigate(['updateUser',id]);

  }

  ngOnInit() {
  }

}
