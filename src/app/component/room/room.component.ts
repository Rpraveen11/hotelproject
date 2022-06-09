import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/reservation.service';
import { Room } from 'src/app/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
rooms:Room[];
  constructor(private reservationService: ReservationService ,private router: Router) { }

  ngOnInit(): void {
    this.listAllRoomFromRemote();
  
  }
 
private listAllRoomFromRemote(){
  this.reservationService['listAllRoomFromRemote']().subscribe(data =>{this.rooms=data;})
}

roomList()
{
  this.router.navigate(['room']);
}
}
