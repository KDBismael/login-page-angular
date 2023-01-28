import { Component,OnInit,Input } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { LocalService } from '../local.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  constructor(private service :AppServiceService,private local: LocalService){}
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
      this.service.register(this.credetials).subscribe(data =>{console.log(data);})
    }else{
      this.service.login(this.credetials).subscribe(data =>{
        this.local.setLocalStorage(data)
        alert('thanks,you are logged in, your data: '+ data);
        this.credetials.email=''
        this.credetials.password=''
      })
    }
  }
}
