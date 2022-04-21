import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient) { }
  addUser(user:User){
    return this.http.post(this.baseUrl+"/addUser",user);
  }
}
