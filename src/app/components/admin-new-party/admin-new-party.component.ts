import { PartyService } from './../../services/party.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Party } from '../../classes/Party';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new-party',
  templateUrl: './admin-new-party.component.html',
  styleUrls: ['./admin-new-party.component.css']
})
export class AdminNewPartyComponent implements OnInit {

  alert: string | null = "Error on creating a new party";
  creationFailed: boolean = false;

  constructor(private partyService: PartyService, private router: Router) { }

  ngOnInit(): void {
  }

  newParty = async (form: NgForm, event:any) => {
    if(form.valid){
      const name: string = form.value.name;
      const candidate: string = form.value.candidate;
      const logoFile: string = event.target.base64logo.files[0];;

      const base64logo = await this.partyService.fileToBase64(logoFile);

      const party: Party = new Party(0,name,candidate,base64logo);

      const result = await this.partyService.newParty(party);
      if(result){
        this.creationFailed = false;
      } else {
        this.alert = "Error on creating a new party";
        this.creationFailed = true;
      }
    }
  }

  closeAlert = () => {
    this.alert = null;
  }

}
