import { Component, OnInit } from '@angular/core';
import { Election } from '../classes/Election';
import { ElectionService } from '../services/election.service';

@Component({
  selector: 'app-user-election-list',
  templateUrl: './user-election-list.component.html',
  styleUrls: ['./user-election-list.component.css']
})
export class UserElectionListComponent implements OnInit {

  elections: Election[] = [];

  constructor(private electionService: ElectionService) {
    this.electionService.newElectionCreated.subscribe(() => {
      this.getAllElections();
    });
    this.electionService.electionDeleted.subscribe(() => {
      this.getAllElections();
    });
    this.electionService.electionUpdated.subscribe(() => {
      this.getAllElections();
    });
   }

  ngOnInit(): void {
    this.getAllElections();
  }

  getAllElections = async () => {
    this.elections = await this.electionService.getElections();
  }

}
