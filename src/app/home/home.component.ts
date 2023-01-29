import { Component } from '@angular/core';
import { AppServiceService } from '../services/http service/app-service.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'loginPages';
  btnValue='signup';
  login=false;
  toggleForm=false;
constructor(private service :AppServiceService) {}
  ngOnInit() {
    this.getData()
  }
  getData(){
    this.service.getData().subscribe(data=>{
      console.log(data);
    });
  }
}
