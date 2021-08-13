import { PartyService } from './../../services/party.service';
import { Election } from './../../classes/Election';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../services/election.service';
import { Party } from '../../classes/Party';
import { Vote } from '../../classes/Vote';
import { DatePipe } from '@angular/common'
import { AuthService } from '../../services/auth.service';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'app-user-election-detail',
  templateUrl: './user-election-detail.component.html',
  styleUrls: ['./user-election-detail.component.css']
})
export class UserElectionDetailComponent implements OnInit {

  id!: number;
  election!: Election;
  parties: Party[] = [];
  selectedParty: Party | undefined = undefined;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private electionService: ElectionService, 
    private partyService: PartyService, private voteService: VoteService, public datepipe: DatePipe, 
    private authService: AuthService, private router: Router) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
   }

  async ngOnInit() {
    this.getElectionAndParties(this.id);
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

  selectParty = (id: number, event:any) => {
    event.preventDefault();
    this.selectedParty = this.parties.find((value) => value.id === id);
  }

  confirmVote() {
    const userId: string | null = this.authService.getUserId();
    const today: Date = new Date();
    let date: string | null = this.datepipe.transform(today, 'yyyy-MM-dd');

    const vote: Vote = new Vote(0, userId!, this.selectedParty!.id, this.election.id, date!);
    
    this.voteService.newVote(vote);
    this.router.navigateByUrl('user-dashboard');
  }

}
