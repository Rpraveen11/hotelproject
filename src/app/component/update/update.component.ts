import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelserviceService } from 'src/app/hotelservice.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userId:number;
  id: number;
  user:any;
HotelserviceService:any;

  constructor(private route:ActivatedRoute, private router:Router, 
    private hotelService:HotelserviceService) { }

  ngOnInit(): void { 
    this.user= new User();
    this.userId = this.route.snapshot.params['id'];
    this.hotelService.getById(this.userId).subscribe(data => {
      console.log(data),
      this.user=data;
    })
  }
  updateUser(){
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId);
    this.hotelService.updateUser(this.userId,this.user)
    .subscribe(data => {
      this.user = data;
       this.gotoList();
    } );
  }
  
  onSubmit(){
    this.updateUser();
  }
  gotoList(){
    this.router.navigate(["hotelList"]);
  }
}