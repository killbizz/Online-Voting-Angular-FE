import { Component, OnInit } from '@angular/core';
import { Election } from '../../classes/Election';
import { ElectionService } from '../../services/election.service';

@Component({
  selector: 'app-admin-election-list',
  templateUrl: './admin-election-list.component.html',
  styleUrls: ['./admin-election-list.component.css']
})
export class AdminElectionListComponent implements OnInit {

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
