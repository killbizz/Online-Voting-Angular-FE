import { Election } from './../classes/Election';
import { ElectionService } from './../services/election.service';
import { Component, OnInit } from '@angular/core';
import { Party } from '../classes/Party';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-admin-party-list',
  templateUrl: './admin-party-list.component.html',
  styleUrls: ['./admin-party-list.component.css']
})
export class AdminPartyListComponent implements OnInit {

  elections: Election[] = [];
  parties: Party[] = [];

  constructor(private partyService: PartyService, private electionService: ElectionService) {
    this.partyService.newPartyCreated.subscribe(() => {
      this.getAllParties();
    });
    this.partyService.partyDeleted.subscribe(() => {
      this.getAllParties();
    });
    this.electionService.electionDeleted.subscribe(() => {
      this.getAllParties();
      this.getAllElections();
    });
    this.electionService.electionUpdated.subscribe(() => {
      this.getAllParties();
      this.getAllElections();
    });
    this.electionService.newElectionCreated.subscribe(() => {
      this.getAllParties();
      this.getAllElections();
    });
  }

  ngOnInit(): void {
    this.getAllParties();
    this.getAllElections();
  }

  getAllParties = async () => {
    this.parties = await this.partyService.getParties();
  }

  getAllElections = async () => {
    this.elections = await this.electionService.getElections();
  }

  deleteParty = async (id: number) => {
    this.partyService.deleteParty(id);
  }

  deletePossibility = (id: number): boolean => {
    const today: Date = new Date();
    let removable: boolean = true;
    this.elections.filter((value) => value.parties.indexOf(id) > -1).forEach((value) => {
      removable =  new Date(value.startDate) > today
    });
    return removable;
  }

}
