import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebServicesService {
  constructor(private _http : Http) {
    this._http = _http;
  }

  registerUser(data)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify(data)
    return this._http.post('http://localhost:5000/api/v1/CreateUser',
        body,
        {headers: headers}).map(res => res.json());
  }
  leaveApplication(leaveData)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var body = JSON.stringify(leaveData)
    return this._http.post('http://localhost:5000/api/v1/LeaveApplication',
        body,
        {headers: headers}).map(res => res.json());
  }
  validateUser(userInfo)
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(userInfo)
    return this._http.post('http://localhost:5000/api/v1/Login',
        body,
        {headers: headers}).map(res => res.json());
  }
  getAllUser()
  {
    return this._http.get('http://localhost:5000/api/v1/GetAllUser').map(res => res.json());
  }
  getAllLead()
  {
    return this._http.get('http://localhost:5000/api/v1/GetAllLead').map(res => res.json());
  }
  getAllLeaves()
  {
    return this._http.get('http://localhost:5000/api/v1/GetAllLeaves').map(res => res.json());
  }
  getAllLeavesByLead(id)
  {
    return this._http.get('http://localhost:5000/api/v1/GetAllLeavesByLead?id=' + id).map(res => res.json());
  }
  getUser(id)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({id: id})
    /*return this._http.get('http://localhost:5000/api/v1/GetUser',new RequestOptions(
     {headers : headers,
     body : body}
     )).map(res => res.json());*/
    return this._http.get('http://localhost:5000/api/v1/GetUser?id=' + id).map(res => res.json());
  }
  getUserLeaveInfo(id)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({id: id})
    /*return this._http.get('http://localhost:5000/api/v1/GetUser',new RequestOptions(
     {headers : headers,
     body : body}
     )).map(res => res.json());*/
    return this._http.get('http://localhost:5000/api/v1/GetUserLeaveInfo?id=' + id).map(res => res.json());
  }

  getUserByLog(email, password)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({opcito_email: email, password: password})
    /*return this._http.get('http://localhost:5000/api/v1/GetUser',new RequestOptions(
     {headers : headers,
     body : body}
     )).map(res => res.json());*/
    return this._http.get('http://localhost:5000/api/v1/GetUserByLog?opcito_email='+email+'&password='+password).map(res=>res.json());
  }
  deleteUser(uid)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({id: uid})
    return this._http.delete('http://localhost:5000/api/v1/DeleteUser', new RequestOptions(
        {headers : headers,
          body : body}
    )).map(res => res.json());
  }
  getRole()
  {

    return this._http.get('http://localhost:5000/api/v1/GetRole').map(res => res.json());

  }
  getHolidays()
  {

    return this._http.get('http://localhost:5000/api/v1/getHoliday').map(res => res.json());

  }
  getLeaveType()
  {

    return this._http.get('http://localhost:5000/api/v1/GetLeaves').map(res => res.json());

  }

  createRole(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify(data1)
    return this._http.post('http://localhost:5000/api/v1/CreateRole',
        body,
        {headers: headers}).map(res => res.json());
  }
  createHoliday(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify(data1)
    return this._http.post('http://localhost:5000/api/v1/createHoliday',
        body,
        {headers: headers}).map(res => res.json());
  }
  createLeaveType(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify(data1)
    return this._http.post('http://localhost:5000/api/v1/CreateLeave',
        body,
        {headers: headers}).map(res => res.json());
  }
  updateUser(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = data1
    return this._http.put('http://localhost:5000/api/v1/UpdateUser',
        body,
        {headers: headers}).map(res => res.json());
  }
  updateLeaveStatus(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body = data1
    return this._http.put('http://localhost:5000/api/v1/HandleLeave',
        body,
        {headers: headers}).map(res => res.json());
  }

  setContext(authModel) {
    console.log(authModel);
    // Cookie.set('isLoggedIn', 'true', 0);
    // Cookie.set('userName', authModel.first_name , 0);
    // Cookie.set('email', authModel.email, 0);
    // Cookie.set('access_token', authModel.token, 0);
    // Cookie.set('role', authModel.role_identifier, 0);
    // Cookie.set('userId', authModel.id, 0);
    localStorage.setItem('access_token', authModel.token);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', authModel.role);
    localStorage.setItem('userId', authModel.userId);
  }
  /**
   * [Provides access token of current logged in user from session]
   */
  getAccessToken() {
    // return Cookie.get('access_token');
    return localStorage.getItem('token');
  }

  setAccessToken(accessToken: any) {
    // return Cookie.set('access_token', accessToken, 0);
    localStorage.setItem('access_token', accessToken);
  }

  getLoggedUserRole() {
    // return Cookie.get('role');
    return localStorage.getItem('role');
  }

  setLoggedUserRole(role: any) {
    // return Cookie.set('role', role, 0);
    localStorage.setItem('role', role);
  }

  getUserId() {
    // return Cookie.get('userId');
    return localStorage.getItem('id');
  }

  setUserId(id: any) {
    // return Cookie.set('userId', userId, 0);
    localStorage.setItem('userId', id);
  }
}
