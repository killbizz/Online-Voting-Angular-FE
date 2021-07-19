import { Election } from '../classes/Election';
import { Party } from './../classes/Party';
import { PartyService } from './../services/party.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { ElectionService } from '../services/election.service';

@Component({
  selector: 'app-admin-new-election',
  templateUrl: './admin-new-election.component.html',
  styleUrls: ['./admin-new-election.component.css']
})
export class AdminNewElectionComponent implements OnInit {

  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion | undefined;
  today: Date = new Date();
  parties: Party[] = [];
  partiesInNewElection: number[] = [];
  creationFailed: boolean = false;
  alert: string | null = "Error on creating a new election";

  constructor(private partyService: PartyService, private electionService: ElectionService) { }

  ngOnInit(): void {
    this.today = new Date();
    this.getAllParties();
  }

  getAllParties = async () => {
    this.parties = await this.partyService.getParties();
  }

  newElection = async (form: NgForm, event: any) => {
    if(form.valid){
      const name: string = form.value.name;
      const type: string = event.target.type.value;
      const startDate: string = event.target.dpStartDate.value;
      const endDate: string = event.target.dpEndDate.value;

      // TODO : validation using ngForm

      const election: Election = new Election(0,name,type,startDate,endDate,this.partiesInNewElection);

      const result = await this.electionService.newElection(election);
      if(result){
        this.creationFailed = false;
      } else {
        this.alert = "Error on creating a new party";
        this.creationFailed = true;
      }
    }
  }

  handlePartyClick(id: number){
    const idx: number = this.partiesInNewElection.indexOf(id);
    if(idx > -1){
      this.partiesInNewElection.splice(idx, 1);
    } else {
      this.partiesInNewElection.push(id);
    }
  }

  closeAlert = () => {
    this.alert = null;
  }


}
