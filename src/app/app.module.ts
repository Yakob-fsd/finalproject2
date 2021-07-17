import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {TokenInterceptorService} from './token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [LoginService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi:true 
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
