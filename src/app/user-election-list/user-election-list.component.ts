import { Component, OnInit } from '@angular/core';
import { Election } from '../classes/Election';
import { Vote } from '../classes/Vote';
import { AuthService } from '../services/auth.service';
import { ElectionService } from '../services/election.service';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-user-election-list',
  templateUrl: './user-election-list.component.html',
  styleUrls: ['./user-election-list.component.css']
})
export class UserElectionListComponent implements OnInit {

  elections: Election[] = [];
  votesInvolved: Vote[] = [];
  userId!: string;
  toolTip: string = "";

  constructor(private electionService: ElectionService, private voteService: VoteService, private authService: AuthService) {
    this.voteService.newVoteCreated.subscribe(() => {
      this.getInvolvedVotes();
    })
     }

  async ngOnInit() {
    this.getAllElections();
    this.getInvolvedVotes();
    this.userId = this.authService.getUserId()!;
  }

  getAllElections = async () => {
    this.elections = await this.electionService.getElections();
  }

  getInvolvedVotes = async () => {
    this.votesInvolved = await this.voteService.getVotesByUserId();
  }

  userAlreadyVoted(electionId: number): boolean {
    return this.votesInvolved.find((value) => value.electionId === electionId && value.userId === this.userId) !== undefined;
  }

  votePossibility(electionId: number, startDate: string, endDate: string) {
    const alreadyVoted: boolean = this.userAlreadyVoted(electionId);
    const today: Date = new Date();
    const timeCompatibility: boolean = new Date(startDate) <= today && new Date(endDate) >= today
    if(alreadyVoted){
      this.toolTip = "You have already voted for this election";
    } else {
      this.toolTip = "This election is terminated or is not already openend";
    }
    return timeCompatibility && !alreadyVoted;
  }

}
