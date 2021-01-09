import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PollService } from 'src/app/services/poll.service';
import {  MatSelectionList } from '@angular/material/list';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @ViewChild("answersList", { static: true }) answersList: MatSelectionList;

  title: string;
  answers: [];
  totalVotes: number;
  id: string;
  votedTime: Date;
  isVoted: boolean;
  initIndex: number;
  isDisabled: boolean = true;

  constructor(private router: ActivatedRoute, private pollService: PollService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');

    this.pollService.pollSnapshot(this.id).subscribe(data => {
      this.title = data['title'];
      this.answers = data['answers'];
      this.totalVotes = data['totalVotes'];
    });
  }

  ngAfterViewInit() {
    this.pollService.voteDataSnapshot(this.id).onSnapshot(data => {
      this.isVoted = !data.empty;
      if (this.isVoted) {
        this.initIndex = data.docs[0].data()['answer'];
        this.votedTime = data.docs[0].data()['time'].toDate();
      }
    });
  }
  
  async submitVote() {
    const i: number = this.answersList.selectedOptions.selected[0]?.value;
    await this.pollService.setVote(this.id, i);
    this.snackBar.open( 'Success....!','',{
      duration:2000,
      horizontalPosition:'end',
      verticalPosition:'top',
    });
  }

}
