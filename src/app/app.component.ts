import { Component } from '@angular/core';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FSD';
  User = {
    username : '',
    password : ''
  };
  constructor(private _login:LoginService,
              private _router:Router){}
  userVerify(){
    this._login.userVerify(user)
     .subscribe(
       res=>{
       localStorage.setItem('token',res.token)
       this._router.navigate(['products'])
       }
     )
  }
}
