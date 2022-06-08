import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/hotelservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private hotelserviceService: HotelserviceService ,private router: Router) { }

  ngOnInit(): void {
  }
  login()
  {
    this.router.navigate(['login']);
  }
}