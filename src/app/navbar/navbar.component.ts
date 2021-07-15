import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged: boolean = false;
  userInLoginOrSignUpPage: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.userSignedIn.subscribe(() => {
      this.userLogged = true;
    });
    this.authService.userLoggedOut.subscribe(() => {
      this.userLogged = false;
    });
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        if(event.url === '/login' || event.url === '/sign-up'){
          this.userInLoginOrSignUpPage = true;
        } else {
          this.userInLoginOrSignUpPage = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.userLogged = this.authService.isUserLoggedIn();
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
