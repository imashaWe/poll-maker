import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PollService } from 'src/app/services/poll.service';
import { MatSelectionList } from '@angular/material/list';
import { TostService } from 'src/app/services/tost.service';

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
  pollStatus: number;

  constructor(private router: ActivatedRoute, private pollService: PollService, private tost: TostService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') ?? '';

    this.pollService.pollSnapshot(this.id).subscribe(data => {
      if (data) {
        this.title = data['title'];
        this.answers = data['answers'];
        this.totalVotes = data['totalVotes'];
        this.pollStatus = 1;
      } else {
        this.pollStatus = 0;
      }

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
    console.log(this.answersList.selectedOptions.isSelected);
    //const i: number = this.answersList.selectedOptions.selected[0]?.value;
    // await this.pollService.setVote(this.id, i);
    // this.tost.success('Success!')
  }

}
