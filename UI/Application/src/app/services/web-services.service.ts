import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {CoolHttp,HttpHeader} from 'angular2-cool-http';
import 'rxjs/add/operator/map';
@Injectable()
export class WebServicesService {
  private collHttp: CoolHttp;


  constructor(private _http : Http, private coolHttp : CoolHttp) {
    this._http = _http;
    this.coolHttp = coolHttp;
  }

  registerUser(data)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body =JSON.stringify(data)
    alert(body)
    return this._http.post('http://localhost:5000/api/v1/CreateUser',
        body,
        {headers:headers}).map(res => res.json());
  }
  leaveApplication(leaveData)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body =JSON.stringify(leaveData)
    return this._http.post('http://localhost:5000/api/v1/LeaveApplication',
        body,
        {headers:headers}).map(res => res.json());
  }
  validateUser(userInfo)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body =JSON.stringify(userInfo)
    return this._http.post('http://localhost:5000/api/v1/Login',
        body,
        {headers:headers}).map(res => res.json());
  }
 getUsers()
  {
    //this.collHttp.registerGlobalHeader(new HttpHeader('MyHttpHeader', 'MyHeadersValue'));

    return this.coolHttp.getAsync('http:localhost:5000/api/v1/GetAllUsers').then(response=>response.json())
  }
  getAllUser()
  {

    return this._http.get('http://localhost:5000/api/v1/GetAllUser').map(res=>res.json());

  }
  getUser(id)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    var body = JSON.stringify({id:id})
    /*return this._http.get('http://localhost:5000/api/v1/GetUser',new RequestOptions(
     {headers : headers,
     body : body}
     )).map(res => res.json());*/
    return this._http.get('http://localhost:5000/api/v1/GetUser?id='+id).map(res=>res.json());
  }

  getUserByLog(email,password)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    var body = JSON.stringify({opcito_email:email,password:password})
    /*return this._http.get('http://localhost:5000/api/v1/GetUser',new RequestOptions(
     {headers : headers,
     body : body}
     )).map(res => res.json());*/
    return this._http.get('http://localhost:5000/api/v1/GetUserByLog?opcito_email='+email+'&password='+password).map(res=>res.json());
  }
  deleteUser(uid)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    var body = JSON.stringify({id:uid})
    return this._http.delete('http://localhost:5000/api/v1/DeleteUser',new RequestOptions(
        {headers : headers,
          body : body}
    )).map(res => res.json());
  }
  getRole()
  {

    return this._http.get('http://localhost:5000/api/v1/GetRole').map(res=>res.json());

  }
  createRole(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body =JSON.stringify(data1)
    return this._http.post('http://localhost:5000/api/v1/CreateRole',
        body,
        {headers:headers}).map(res => res.json());
  }
  updateUser(data1)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body=data1
    return this._http.put('http://localhost:5000/api/v1/UpdateUser',
        body,
        {headers:headers}).map(res => res.json());
  }
}
