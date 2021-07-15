import { UserInterface } from './../interfaces/UserInterface';

export class User implements UserInterface {
    email: string;
    username: string;
    password: string;

    constructor(email: string, username: string, password: string){
        this.email = email;
        this.username = username;
        this.password = password;
    }

}