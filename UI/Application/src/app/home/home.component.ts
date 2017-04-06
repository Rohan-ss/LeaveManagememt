import { Component, OnInit } from '@angular/core';
import {WebServicesService} from '../services/web-services.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list = [];
  constructor(private route : ActivatedRoute)
  {
   alert("Home method called")
  }

  ngOnInit()
  {}

}
