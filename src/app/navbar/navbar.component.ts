import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLogged: boolean = false;
  isUserInLoginOrSignUpPage: boolean = false;
  isUserAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.userSignedIn.subscribe(() => {
      this.isUserLogged = true;
      this.isUserAdmin = this.authService.isUserAdmin();
    });
    this.authService.userLoggedOut.subscribe(() => {
      this.isUserLogged = false;
    });
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        if(event.url === '/login' || event.url === '/sign-up'){
          this.isUserInLoginOrSignUpPage = true;
        } else {
          this.isUserInLoginOrSignUpPage = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLoggedIn();
    this.isUserAdmin = this.authService.isUserAdmin();
  }

  login(event: any){
    event.preventDefault();
    this.router.navigateByUrl('login');
  }

  logout(event: any){
    event.preventDefault();
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
