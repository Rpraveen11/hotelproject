import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {
userId:User;
  id:number;
 
private baseURL:any ='http://localhost:8086/api/user/';
  

  constructor(private httpClient: HttpClient) { }

  listAllUserFromRemote():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL);
  }
  
  addUser(user : Object) : Observable<Object>{
    return this.httpClient.post(this.baseURL, user);
  }

  updateUser(userId:number, user:User) : Observable<Object> {
    return this.httpClient.put<User>(this.baseURL+user.userId, user);
  }

  deleteUser(userId: number) :Observable<Object>{
    return this.httpClient.delete(this.baseURL+userId);
  }

 
 getById(userId : number): Observable<any> {
    return this.httpClient.get(this.baseURL +userId);
   
 }
 
}





