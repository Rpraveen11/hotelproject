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

  
  id:number;
user:any;
    constructor(private route:ActivatedRoute, private router :Router, 
      private hotelService:HotelserviceService) { }
  
    ngOnInit(): void { 
      this.user= new User();
      this.id = this.route.snapshot.params['id'];
      this.hotelService['getUserById'](this.id)
      .subscribe(data => {
        console.log(data),
        this.user=data;
      })
    }
    updateUser(){
      this.hotelService.updateUser(this.user.userId, this.user)
      .subscribe(data => {
        this.user= data;
        this.gotoList();
      } );
    }
  User(userId: any, User: any) {
    throw new Error('Method not implemented.');
  }
    
    onSubmit(){
      this.updateUser();
    }
    gotoList(){
      this.router.navigate(['updateUser']);
    }
}
