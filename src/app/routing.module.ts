import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';


const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'index',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [RouteGuardService]
})
export class RoutingModule { }
