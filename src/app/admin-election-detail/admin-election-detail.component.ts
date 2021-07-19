import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Election } from '../classes/Election';
import { Party } from '../classes/Party';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-admin-election-detail',
  templateUrl: './admin-election-detail.component.html',
  styleUrls: ['./admin-election-detail.component.css']
})
export class AdminElectionDetailComponent implements OnInit {

  @Input() election!: Election;
  userWantsToUpdate: boolean = false;
  parties: Party[] = [];

  constructor(private modalService: NgbModal, private partyService: PartyService) {   }

  ngOnInit(): void {
    this.getParties();
  }

  getParties = async () => {
    this.parties = await this.partyService.getParties();
  }

  open = (content: any) => {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.finally(() => {
      this.disableUpdateElection();
    });
  }

  enableUpdateElection() {
    this.userWantsToUpdate = true;
  }

  disableUpdateElection() {
    this.userWantsToUpdate = false;
  }

  updateElection = async (f: NgForm) => {

  }

  deleteElection = async () => {
    this.partyService.deleteParty(this.election.id);
  }

}
