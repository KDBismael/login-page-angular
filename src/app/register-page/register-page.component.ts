import { Component,OnInit,Input } from '@angular/core';
import { AppServiceService } from '../services/http service/app-service.service';
import { LocalService } from '../services/local service/local.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  constructor(private service :AppServiceService,private local: LocalService,private router:Router){}
  @Input() login!:boolean;
  credetials={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
  }
  token={};

  changePage():void{
    this.login=!this.login;
  }
  onSubmit():void{
    if(!this.login){
      this.service.register(this.credetials).subscribe(data =>{
        this.local.setLocalStorage(data)
        this.router.navigate(['/protected'],data)
      })

      this.router.navigate(['/protected'])
    }else{
      this.service.login(this.credetials).subscribe(data =>{
        this.local.setLocalStorage(data)
        this.router.navigate(['/protected'])
        this.credetials.email=''
        this.credetials.password=''
      })
    }
  }
}
