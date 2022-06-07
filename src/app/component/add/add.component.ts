import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/hotelservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  

  constructor( private hotelServiceservice :HotelserviceService, private router: Router) { }
user:User = new User();

  ngOnInit(): void {
  }

  onSubmit(){
    this.addUser();
  }

  addUser(){
    this.hotelServiceservice 
    .addUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
 });
  }

  gotoList(){
    this.router.navigate(['hotelList']);
  }
}

