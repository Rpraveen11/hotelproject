import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  id:number;
  userId:number;
private baseURL ="http://localhost:8086";
  

  constructor(private httpClient: HttpClient) { }

  listAllUserFromRemote():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL+"/api/user");
  }
  
  addUser(user : Object) : Observable<Object>{
    return this.httpClient.post(this.baseURL+"/api/user", user);
  }

  updateUser(userId:number, user:User) : Observable<Object> {
    return this.httpClient.put(this.baseURL+"/api/user/"+userId, user);
  }

  deleteUser(userId: number) :Observable<Object>{
    return this.httpClient.delete(this.baseURL+"/api/user/"+userId);
  }

  // getById(userId:number): Observable<Object>{
  //   return this.httpClient.get(this.baseURL+"/api/user/"+userId);
  // }
 getById(userId): Observable<User> {
    return this.httpClient.get<User>(this.baseURL +"/api/user/${userId}");
   
 }
  // errorHandler(errorHandler: any): import("rxjs").OperatorFunction<User, User> {
  //   throw new Error('Method not implemented.');
  // }
}



// function catchError(errorHandler: any): import("rxjs").OperatorFunction<User, User> {
//   throw new Error('Function not implemented.');
// }

