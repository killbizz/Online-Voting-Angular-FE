import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Election } from '../classes/Election';

@Component({
  selector: 'app-admin-election-detail',
  templateUrl: './admin-election-detail.component.html',
  styleUrls: ['./admin-election-detail.component.css']
})
export class AdminElectionDetailComponent implements OnInit {

  closeResult: string = '';
  @Input() election!: Election;
  userWantsToUpdate: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open = (content: any) => {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason = (reason: any): string => {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
    //service.delete(id)
  }

}
