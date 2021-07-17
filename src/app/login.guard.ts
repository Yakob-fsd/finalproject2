import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _login:LoginService,
              private _router:Router){}
  canActivate():boolean{
    if(this._login.loggedIn())
      {
        return true;
      }
    else{
      this._router.navigate(['login']);
      return false;
    }
  }
  }
  

