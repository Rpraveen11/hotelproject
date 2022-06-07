import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {
  [x: string]: any;
  // getAllUserFromRemote() {
  //   throw new Error('Method not implemented.');
  // }
private baseURL ="http://localhost:8086";
  

  constructor(private httpClient: HttpClient) { }

  listAllUserFromRemote():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL+"/api/user");
  }
  
  addUser(user : Object) : Observable<Object>{
    return this.httpClient.post(this.baseURL+"/api/user", user);
  }

  updateUser(id:number, user:User) : Observable<Object> {
    return this.httpClient.put(this.baseURL+"/api/user/"+id, user);
  }

  deleteUser(id: number) :Observable<Object>{
    return this.httpClient.delete(this.baseURL+"/api/user/"+id);
  }

  getById(id:number): Observable<Object>{
    return this.httpClient.get(this.baseURL+"/api/user/"+id);
  }
}
