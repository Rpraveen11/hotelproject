import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL ="http://localhost:8086";
  

  constructor(private httpClient: HttpClient) { }

  listAllRoomFromRemote():Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.baseURL+"/api/room");
  }
}
