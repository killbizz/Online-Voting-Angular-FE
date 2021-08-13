import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isUserLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.userSignedIn.subscribe(() => {
      this.isUserLogged = true;
    });
    this.authService.userLoggedOut.subscribe(() => {
      this.isUserLogged = false;
    });
   }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLoggedIn();
  }

}
