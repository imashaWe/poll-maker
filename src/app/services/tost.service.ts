import { Component, Inject, Injectable } from '@angular/core';
import { MatSnackBar,MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TostService {

  constructor(private snackBar: MatSnackBar) { }

  erro(text:string): void {
      this.snackBar.openFromComponent(SnackBarView,{
        data:{isError:true,text:text},
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snack-bar-error']
      })
  }

  success(text:string): void {
      this.snackBar.openFromComponent(SnackBarView,{
        data:{isError:false,text:text},
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snack-bar-success']
      })
  }
}

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.html',
  styles: [`
  .error {
    background-color: red;
  }

  .success {
    background-color: green;
  }
  `],
})
export class SnackBarView { 
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data){}
}