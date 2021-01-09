import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';
import {TostService  } from 'src/app/services/tost.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formData = { title: null, answers: [], restrictUnable: false, to: null, from: null, isOneTime: false };
  title: string = '';
  answer: string = '';
  restrictUnable;
  answers = [];

  constructor(private pollService: PollService, private snackBar: MatSnackBar, private router: Router,private tost:TostService) { }

  ngOnInit(): void {
  }

  addAnswer(): void {
    if (this.answer == null || this.answer.length == 0) return;
    this.formData.answers.push(this.answer);
    this.answer = null;
  }

  deleteAnswer(i: number): void {
    this.answers.splice(i, 1);
  }

  publish(): void {
    this.pollService.create(this.formData).then(id => {
      this.tost.success('Poll has been created!');
      this.router.navigate(['poll/vote/' + id],);
    });

  }
}
