import { PartyService } from './../services/party.service';
import { Election } from './../classes/Election';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '../services/election.service';
import { Party } from '../classes/Party';

@Component({
  selector: 'app-user-election-detail',
  templateUrl: './user-election-detail.component.html',
  styleUrls: ['./user-election-detail.component.css']
})
export class UserElectionDetailComponent implements OnInit {

  id!: number;
  election!: Election;
  parties: Party[] = [];

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private electionService: ElectionService, private partyService: PartyService) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
   }

  async ngOnInit() {
    await this.getElectionAndParties(this.id);
  }

  getElectionAndParties = async (id: number) => {
    this.election = await this.electionService.getElection(id);
    this.election.parties.forEach((value) => {
      this.getParty(value);
    });
  }

  getParty = async (id:number) => {
    this.parties.push(await this.partyService.getParty(id));
  }

  open = (content: any) => {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.finally(() => {
      // this.disableUpdateElection();
    });
  }

  votePossibility() {
    // const today: Date = new Date();
    // return new Date(this.election.startDate) > today;
  }

  vote = async (form: NgForm, event: any) => {

  }

  confirmVote() {

  }

}
