import { Component, OnInit,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tost',
  templateUrl: './tost.component.html',
  styleUrls: ['./tost.component.css']
})
export class TostComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data){}

  ngOnInit(): void {
  }

}
