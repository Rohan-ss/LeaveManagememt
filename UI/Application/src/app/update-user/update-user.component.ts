import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebServicesService} from '../services/web-services.service';
import {ViewUser} from '../models/viewUser';
import {NgForm} from '@angular/forms';
import {Role} from '../models/Role';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId : string;
  updatedData ={};
  userData : ViewUser[];
  public role : Role[];
  constructor(private route : ActivatedRoute, private _updateService : WebServicesService )
  {
    this.userId = route.snapshot.params['id'];
    this._updateService.getUser(this.userId).subscribe(data=>this.userData=data);
    this._updateService.getRole().subscribe(data=>this.role=data);
  }

  ngOnInit() {
   }
  onSubmit(f: NgForm)
  {
    this.updatedData=
        {
          id:this.userId,
          fname:f.form.controls['fname'].value,
          mname:f.form.controls['mname'].value,
          lname:f.form.controls['lname'].value,
           contact:f.form.controls['contact'].value,
             personal_email : f.form.controls['personal_email'].value,
             opcito_email : f.form.controls['opcito_email'].value,
             user_id_number : f.form.controls['uid_no'].value,
             pan_number : f.form.controls['pan_number'].value,
            current_address1 : f.form.controls['current_address1'].value,
            current_address2 : f.form.controls['current_address2'].value,
            current_address3 : f.form.controls['current_address3'].value,
            current_state : f.form.controls['current_state'].value,
            current_city : f.form.controls['current_city'].value,
            current_pin : f.form.controls['current_pin'].value,
            permanent_address1 : f.form.controls['permanent_address1'].value,
            permanent_address2 : f.form.controls['permanent_address2'].value,
            permanent_address3 : f.form.controls['permanent_address3'].value,
            permanent_state : f.form.controls['permanent_state'].value,
            permanent_city : f.form.controls['permanent_city'].value,
            permanent_pin : f.form.controls['permanent_pin'].value,
            emergency_contact_name1 : f.form.controls['emergency_contact_name1'].value,
            emergency_contact_name2 : f.form.controls['emergency_contact_name2'].value,
            emergency_contact_number1 : f.form.controls['emergency_contact_number1'].value,
            emergency_contact_number2 : f.form.controls['emergency_contact_number2'].value,
            password : f.form.controls['password'].value,
            birthdate : f.form.controls['birthdate'].value
        }
    var data = JSON.stringify(this.updatedData)
    this._updateService.updateUser(data)
        .subscribe(
            data => alert( JSON.stringify(data)),
            error => alert(error),
            ()=>console.log("finish")
        );
  }


}
