import { UserElectionDetailComponent } from './components/user-election-detail/user-election-detail.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
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
