import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed: boolean = false;
  alert: string | null = "Login failed, please retry";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn = async (form: NgForm) => {

    if(form.valid){
      // Form parameters extraction
      const email: string = form.value.email;
      const password: string = form.value.password;

      const result = await this.authService.signIn(email,password);
      if(result){
        this.router.navigateByUrl('');
      } else {
        this.alert = "Login failed, please retry";
        this.loginFailed = true;
      }
    }
  }

  closeAlert = () => {
    this.alert = null;
  }

}
