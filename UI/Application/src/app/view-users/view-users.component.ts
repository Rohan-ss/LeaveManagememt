import { Component, OnInit } from '@angular/core';
import {ViewUser} from '../models/viewUser';
import {WebServicesService} from '../../services/web-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  user: ViewUser[];
  userid: string;
  constructor(private _userService: WebServicesService, private _router: Router) {
       this._userService.getAllUser().subscribe(
      posts => JSON.stringify(this.user = posts));

  }
  deleteUser(id) {
    this._userService.deleteUser(id).subscribe(data => data);
    this._userService.getAllUser().subscribe(posts => this.user = posts);
  }

  updateUser(id) {
    this.userid = id;
    this._router.navigate(['updateUser', id]);

  }

  ngOnInit() {
  }


}
