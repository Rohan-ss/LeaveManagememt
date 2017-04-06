import { Component,OnInit } from '@angular/core';
import {CoolHttp,HttpHeader} from 'angular2-cool-http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  coolHttp : CoolHttp;

  constructor(coolHttp : CoolHttp)
  {
      this.coolHttp = coolHttp;
      this.coolHttp.registerGlobalHeader(new HttpHeader('MyHttpHeader', 'MyHeadersValue'));
  }

  ngOnInit()
  {}
}
