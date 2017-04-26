import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WebServicesService} from '../../services/web-services.service';
import {Holidays} from '../models/holidays';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  holidayCal: Holidays[];
  constructor(private _router: Router,
              private holidayService: WebServicesService) {
    this.holidayService.getHolidays().subscribe(data => this.holidayCal = data);
  }
  ngOnInit() {
  }

}
