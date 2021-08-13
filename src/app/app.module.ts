import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminNewElectionComponent } from './components/admin-new-election/admin-new-election.component';
import { AdminElectionListComponent } from './components/admin-election-list/admin-election-list.component';
import { ElectionService } from './services/election.service';
import { AdminElectionDetailComponent } from './components/admin-election-detail/admin-election-detail.component';
import { AdminNewPartyComponent } from './components/admin-new-party/admin-new-party.component';
import { AdminPartyListComponent } from './components/admin-party-list/admin-party-list.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserElectionListComponent } from './components/user-election-list/user-election-list.component';
import { UserElectionHistoryComponent } from './components/user-election-history/user-election-history.component';
import { UserElectionDetailComponent } from './components/user-election-detail/user-election-detail.component';
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
