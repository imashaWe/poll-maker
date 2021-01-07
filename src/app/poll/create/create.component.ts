import { Component, OnInit } from '@angular/core';
import {PollService} from 'src/app/services/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title: string = '';
  answer: string = '';

  answers = [];
  constructor(private pollService:PollService) { }

  ngOnInit(): void {
  }

  addAnswer(): void {
    if (this.answer == null || this.answer.length == 0) return;
    this.answers.push(this.answer);
    this.answer = null;
  }

  deleteAnswer(i: number): void {
    this.answers.splice(i, 1);
  }

  publish():void {
    this.pollService.create(this.title,this.answers);
  }
}
