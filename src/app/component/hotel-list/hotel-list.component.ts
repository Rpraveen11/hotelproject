import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelserviceService } from 'src/app/hotelservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
 user: User[];

 HotelServiceService:any;
  constructor(private hotelserviceService: HotelserviceService ,private router: Router) { }

  ngOnInit(): void {
  this.listAllUserFromRemote();

  }
private listAllUserFromRemote(){
  this.hotelserviceService['listAllUserFromRemote']().subscribe(data =>{this.user=data;})
}




updateUser(userId:number) {
  this.router.navigate(['update',userId]);
}
addUser(){
this.router.navigate(['add']);
}
userList()
{
  this.router.navigate(['userList']);
}
deleteUser(userId: number) {
  this.hotelserviceService.deleteUser(userId)
    .subscribe(
      data => {
        console.log(data);
    
       this.hotelserviceService.listAllUserFromRemote();
      })
 }


}
