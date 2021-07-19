import { ElectionService } from './../services/election.service';
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
  alert: string | null = null;
  deletionFailed: boolean = false;
  partiesInModifiedElection: number[] = [];
  modificationFailed: boolean = false;

  constructor(private modalService: NgbModal, private partyService: PartyService, private electionService: ElectionService) {    }

  ngOnInit(): void {
    this.getAllParties();
    this.partiesInModifiedElection = Array.from(this.election.parties);
  }

  getAllParties = async () => {
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

  formValidation(name: string, type: string, startDate: string, endDate: string, parties: number[]) {
    let valid: boolean = true;
    if(name === this.election.name && type === this.election.type && startDate === this.election.startDate && 
      endDate === this.election.endDate && this.arraysEqual(parties, this.election.parties)){
        this.alert = "At least one field must be modified";
        this.modificationFailed = true;
        valid = false;
    } else {
      this.modificationFailed = false;
      this.alert = null;
    }
    return valid;
  }

  arraysEqual(a: number[], b: number []) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  updateElection = async (form: NgForm, event:any) => {
    if(form.valid){
      let name: string = event.target.name.value;
      let type: string = event.target.type.value;
      let startDate: string = event.target.dpStartDate.value;
      let endDate: string = event.target.dpEndDate.value;

      const valid: boolean = this.formValidation(name,type,startDate,endDate,this.partiesInModifiedElection);

      if(valid){
        name = name === "" ? this.election.name : name;
        type = type === "" ? this.election.type : type;
        startDate = startDate === "" ? this.election.startDate : startDate;
        endDate = endDate === "" ? this.election.endDate : endDate;
        this.partiesInModifiedElection = this.partiesInModifiedElection.length === 0 ? this.election.parties : this.partiesInModifiedElection;

        const election: Election = new Election(this.election.id,name,type,startDate,endDate,this.partiesInModifiedElection);

        const result = await this.electionService.newElection(election);
        if(result){
          this.modificationFailed = false;
          this.alert = null;
          this.modalService.dismissAll('Submit click');
          this.disableUpdateElection();
        } else {
          this.alert = "Error updating the current election";
          this.modificationFailed = true;
        }
      }
    }
  }

  deleteElection = async () => {
    const result: boolean = await this.electionService.deleteElection(this.election.id);
    if(result){
      this.alert = null;
      this.deletionFailed = false;
    } else {
      this.alert = "Error deleting the election";
      this.deletionFailed = true;
    }
  }

  handlePartyClick(id: number){
    const idx: number = this.partiesInModifiedElection.indexOf(id);
    if(idx > -1){
      this.partiesInModifiedElection.splice(idx, 1);
    } else {
      this.partiesInModifiedElection.push(id);
    }
  }

  closeAlert = () => {
    this.alert = null;
    this.deletionFailed = false;
    this.modificationFailed = false;
  }

  updateOrDeletePossibility() {
    const today: Date = new Date();
    return new Date(this.election.startDate) > today;
  }

}
