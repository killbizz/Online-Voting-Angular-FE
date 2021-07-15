import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { SynthesizerService } from './services/synthesizer.service';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [SynthesizerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
