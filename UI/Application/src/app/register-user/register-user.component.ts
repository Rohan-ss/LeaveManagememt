import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {Role} from '../models/Role';
import {NgForm} from '@angular/forms';
import {WebServicesService} from'../services/web-services.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  data = {};
  public role : Role[];
   model = new User('','','','','','','','','','','','','',
    '','','','','','','','','','',
        '','','','','','');
    constructor(private _createUser : WebServicesService) {
      this._createUser = _createUser;
      this._createUser.getRole().subscribe(data=>this.role=data)
     }
  onSubmit(f: NgForm)
  {
    try
    {
          this.data = {
              emp_role : f.form.controls['role_id'].value,
            registration_id : f.form.controls['reg_no'].value,
            fname : f.form.controls['fname'].value,
            mname : f.form.controls['mname'].value,
            lname : f.form.controls['lname'].value,
            status : f.form.controls['status'].value,
              contact : f.form.controls['contact'].value,
            gender : f.form.controls['gender'].value,
            personal_email : f.form.controls['personal_email'].value,
            opcito_email : f.form.controls['opcito_email'].value,
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
            password : btoa(f.form.controls['password'].value),
            birthdate : f.form.controls['birthdate'].value,
            user_id_number : f.form.controls['uid_no'].value,
            pan_number : f.form.controls['pan_number'].valid
        
           };

        this._createUser.registerUser(this.data).subscribe(
            data => alert( JSON.stringify(data)),
            error => alert(error),
            ()=>console.log("finish")
        );
    }
    catch(error)
    { alert(error)}
      
  }
  ngOnInit() {
  }

}
