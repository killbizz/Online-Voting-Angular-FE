import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-election-detail',
  templateUrl: './user-election-detail.component.html',
  styleUrls: ['./user-election-detail.component.css']
})
export class UserElectionDetailComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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

}
