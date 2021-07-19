import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-new-election',
  templateUrl: './admin-new-election.component.html',
  styleUrls: ['./admin-new-election.component.css']
})
export class AdminNewElectionComponent implements OnInit {

  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  newElection = async (form: NgForm) => {
    if(form.valid){
      const email: string = form.value.email;
      const password: string = form.value.password;
      const username: string = form.value.username;

      // const user: User = new User(email, password, username);

      

      // const result = await this.authService.signUp(user);
      // if(result){
      //   this.router.navigateByUrl('');
      // } else {
      //   this.alert = "The email is already associated with an existing account";
      //   this.signUpFailed = true;
      // }
    }
  }

}
