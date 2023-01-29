import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtHelperService,JwtModule} from '@auth0/angular-jwt';



import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProtectedComponent } from './protected/protected.component';
import { Router } from 'src/app/app.routes';
import { HomeComponent } from './home/home.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    ProtectedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Router,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:3000/"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
