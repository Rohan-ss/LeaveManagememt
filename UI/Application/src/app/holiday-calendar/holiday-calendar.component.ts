import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebServicesService} from '../../services/web-services.service';
import {Holidays} from '../models/holidays';
@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.css']
})
export class HolidayCalendarComponent implements OnInit {
  data = {};
  holidayCal: Holidays[]
  holiday: string;
  description: string;
  constructor( private holidayService: WebServicesService) {
    this.holidayService.getHolidays().subscribe(data => alert(JSON.stringify(this.holidayCal=data)));
  }
  ngOnInit() {
  }
  onSubmit(f: NgForm){
    this.data = {
      date: this.holiday,
      tag: this.description
    };
    this.holidayService.createHoliday(this.data).subscribe(data =>  JSON.stringify(data),
        error => alert(error),
        () => console.log('finish'));
  }
}
