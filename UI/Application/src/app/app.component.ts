import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private localStorageService: LocalStorageService, private router : Router) {
    const token = localStorage.getItem('token');
      if (token != null)
      {
          this.router.navigate(['home']);
      }else {
       this.router.navigate(['login']);
      }
  }

}
