import { Component, OnInit } from '@angular/core';
import {Role} from '../models/Role';
import {WebServicesService} from '../../services/web-services.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  role: Role[];
  roletype: string;
  constructor(private roleInfo: WebServicesService) {
    this.roleInfo.getRole().subscribe(data => JSON.stringify(this.role = data));

  }
  onSubmit(f: NgForm) {
    const data = {
      role: this.roletype
    };
    JSON.stringify(data);
    this.roleInfo.createRole(data).subscribe(data =>  JSON.stringify(data),
        error => alert(error),
        () => console.log('finish'));
    this.roleInfo.getRole().subscribe(data => JSON.stringify(this.role = data));

  }
  ngOnInit() {
  }

}
