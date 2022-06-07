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

  userService: any;
  constructor(private hotelserviceService: HotelserviceService ,private router: Router) { }

  ngOnInit(): void {
  this.listAllUserFromRemote();
  }
private listAllUserFromRemote(){
  this.hotelserviceService['listAllUserFromRemote']().subscribe(data =>{this.user=data;})
}




updateUser(id:number, user: User) {
  this.router.navigate(['updateUser', user]);
}
addUser(){
this.router.navigate(['add']);
}


deleteUser(userId: number) {
  this.userService.deleteUser(userId)
    .subscribe(
      data => {
        console.log(data);
        this.listAllUserFromRemote();
      })
 }
//   getAllEmployeeFromRemote() {
//     throw new Error('Method not implemented.');
//   }


}
