import { ElectionService } from './../services/election.service';
import { Component, OnInit } from '@angular/core';
import { Election } from '../classes/Election';
import { Party } from '../classes/Party';
import { Vote } from '../classes/Vote';
import { VoteService } from '../services/vote.service';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-user-election-history',
  templateUrl: './user-election-history.component.html',
  styleUrls: ['./user-election-history.component.css']
})
export class UserElectionHistoryComponent implements OnInit {

  votes: Vote[] = [];
  electionsInvolved: Election[] = [];
  partiesInvolved: Party[] = [];

  constructor(private voteService:VoteService, private electionService: ElectionService, private partyService: PartyService) { }

  async ngOnInit() {
    await this.getAllVotes();
    await this.getElectionsAndPartiesInvolved();
  }

  getAllVotes = async () => {
    this.votes = await this.voteService.getVotesByUserId();
  }

  getElectionsAndPartiesInvolved = async () => {
    this.votes.forEach(async (value) => {
      this.electionsInvolved.push(await this.electionService.getElection(value.electionId));
      this.partiesInvolved.push(await this.partyService.getParty(value.partyId));
    })
  }

  getCorrispondingElection = (id: number) => {
    return this.electionsInvolved.find((value) => value.id === id);
  }

  getCorrispondingParty = (id: number) => {
    return this.partiesInvolved.find((value) => value.id === id);
  }

}
