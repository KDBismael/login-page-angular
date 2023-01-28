import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {
  constructor( private http:HttpClient) { }
  public getData(){
    return this.http.get('http://localhost:3000/test')
  }
  public register(User:Object){
    return this.http.post('http://localhost:3000/register',User)
  }
  public login(User:Object){
    return this.http.post('http://localhost:3000/login',User)
  }
}
