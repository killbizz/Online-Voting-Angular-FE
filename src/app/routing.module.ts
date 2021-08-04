import { UserElectionDetailComponent } from './user-election-detail/user-election-detail.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserRouteGuardService } from 'src/app/services/user-route-guard.service';
import { AdminRouteGuardService } from './services/admin-route-guard.service';


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
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminRouteGuardService]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [UserRouteGuardService]
  },
   {
     path: 'user-dashboard/election/:id',
     component: UserElectionDetailComponent,
     canActivate: [UserRouteGuardService]
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
  providers: [UserRouteGuardService, AdminRouteGuardService]
})
export class RoutingModule { }
