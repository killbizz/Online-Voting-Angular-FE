import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';
import getlambdaResponse from '../lib/lambdas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged: boolean = false;
  private userRole: String = "";
  @Output() userSignedIn = new EventEmitter();
  @Output() userLoggedOut = new EventEmitter();
  @Output() userSignedUp = new EventEmitter();

  constructor() { }

  isUserLoggedIn() : boolean{
    this.userLogged = !!localStorage.getItem("token");
    return this.userLogged;
  }

  signIn = async (email: string, password: string): Promise<boolean> => {
    const credentials = {
      email: email,
      password: password
    };
    const { response } = (
      await getlambdaResponse("login", "POST", JSON.stringify(credentials))
    ).props;
    if (response.jwtToken === undefined) {
      return false;
    }
    this.userLogged = true;
    this.userRole = response.role;
    localStorage.setItem("jwtToken", response.jwtToken);
    this.userSignedIn.emit();
    return true;
  }

  signUp = async (user: User) : Promise<boolean> => {
    // check if exists already a user with user.email
    const res = (
      await getlambdaResponse("user/"+user.email, "GET", null)
    ).props.response;
    if(res.error === undefined){
      return false;
    }
    // create the new user
    const { response } = (
      await getlambdaResponse("user", "POST", JSON.stringify(user))
    ).props;
    if (response.cause !== undefined) {
      return false;
    }
    this.userSignedUp.emit();
    return true;
  }

  logout(): void {
    localStorage.removeItem("jwtToken");
    this.userLogged = false;
    this.userLoggedOut.emit();
  }
}
