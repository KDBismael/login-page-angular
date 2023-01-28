import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { AppServiceService } from './app-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginPages';
  btnValue='signup';
  login=false;
  toggleForm=false;
  constructor(private service :AppServiceService){

  }
  ngOnInit() {
    this.getData()
  }
  getData(){
    this.service.getData().subscribe(data=>{
      console.log(data);
    });
  }
}
