import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../models/train';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  url="http://localhost:3000/"

  constructor(private myHttp: HttpClient) { }


  get():Observable<User[]>{
    return this.myHttp.get<User[]>(this.url + "users")
  }
}
