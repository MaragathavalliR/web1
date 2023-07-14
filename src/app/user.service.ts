import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserSign } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:any;
  constructor(private http:HttpClient) { }
  login(userLogin:User):Observable<any>{
    this.user=userLogin;
    console.log(userLogin);
    return this.http.post<any>("http://localhost:3000/api/users/login", userLogin)
    
}

signup(userSign:UserSign):Observable<any>{
  this.user=userSign;
  console.log(userSign);
  return this.http.post<any>("http://localhost:3000/api/users/signup", userSign)
  
}
get currentUser(){
  return this.user;
}  

}
