import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNewElectionComponent } from './admin-new-election/admin-new-election.component';
import { AdminElectionListComponent } from './admin-election-list/admin-election-list.component';
import { ElectionService } from './services/election.service';
import { AdminElectionDetailComponent } from './admin-election-detail/admin-election-detail.component';
import { AdminNewPartyComponent } from './admin-new-party/admin-new-party.component';
import { AdminPartyListComponent } from './admin-party-list/admin-party-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserElectionListComponent } from './user-election-list/user-election-list.component';
import { UserElectionHistoryComponent } from './user-election-history/user-election-history.component';
import { UserElectionDetailComponent } from './user-election-detail/user-election-detail.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    AdminDashboardComponent,
    AdminNewElectionComponent,
    AdminElectionListComponent,
    AdminElectionDetailComponent,
    AdminNewPartyComponent,
    AdminPartyListComponent,
    UserDashboardComponent,
    UserElectionListComponent,
    UserElectionHistoryComponent,
    UserElectionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [AuthService, ElectionService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
