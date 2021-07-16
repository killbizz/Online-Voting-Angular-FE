import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';
import getlambdaResponse from '../lib/lambdas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged: boolean = !!localStorage.getItem("jwtToken");
  private userRole: String | null = !!localStorage.getItem("jwtToken") ? localStorage.getItem("userRole") : null;
  @Output() userSignedIn = new EventEmitter();
  @Output() userLoggedOut = new EventEmitter();
  @Output() userSignedUp = new EventEmitter();

  constructor() { }

  isUserLoggedIn() : boolean {
    return this.userLogged;
  }

  isUserAdmin() : boolean {
    return this.isUserLoggedIn() && this.userRole === "admin";
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
    // TODO : creo un endpoint nel backend che mi restituisca il ruolo dato un JWT
    localStorage.setItem("userRole", response.role);
    this.userSignedIn.emit();
    return true;
  }

  signUp = async (user: User) : Promise<boolean> => {
    const { response } = (
      await getlambdaResponse("user", "POST", JSON.stringify(user))
    ).props;
    if (response.code !== undefined) {
      return false;
    }
    this.userSignedUp.emit();
    return true;
  }

  logout(): void {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userRole");
    this.userLogged = false;
    this.userRole = null;
    this.userLoggedOut.emit();
  }
}
