import { User } from './../../classes/User';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpFailed: boolean = false;
  alert: string | null = "The email is already associated with an existing account";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp = async (form: NgForm) => {
    if(form.valid){
      const email: string = form.value.email;
      const password: string = form.value.password;
      const username: string = form.value.username;

      const user: User = new User(email, password, username);

      

      const result = await this.authService.signUp(user);
      if(result){
        this.router.navigateByUrl('');
      } else {
        this.alert = "The email is already associated with an existing account";
        this.signUpFailed = true;
      }
    }
  }

  closeAlert = () => {
    this.alert = null;
  }

}
