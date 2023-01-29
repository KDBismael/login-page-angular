import { RouterModule, Routes } from '@angular/router';
import { HomeComponent as home } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './services/authGuard/auth-guard.service';
import { NgModule } from '@angular/core';

const routes:Routes=[
  {path: '', component:home},
  {path : 'protected',component:ProtectedComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Router{}
