import { Component, Inject, Injectable } from '@angular/core';
import { MatSnackBar,MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import {TostComponent} from '../../app/widget/tost/tost.component';

@Injectable({
  providedIn: 'root'
})
export class TostService {

  constructor(private snackBar: MatSnackBar) { }

  erro(text:string): void {
      this.snackBar.openFromComponent(TostComponent,{
        data:{isError:true,text:text},
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['snack-bar-error']
      })
  }

  success(text:string): void {
      this.snackBar.openFromComponent(TostComponent,{
        data:{isError:false,text:text},
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['snack-bar-success']
      })
  }
}

// @Component({
//   selector: 'snack-bar',
//   template: `<span>
//   <mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon>
//                 {{data.text}}
//               </span>`,
//   styles: [`
//   .error {
//     background-color: red;
//   }

//   .success {
//     background-color: green;
//   }
//   `],
// })
// export class SnackBarView { 
//   constructor(@Inject(MAT_SNACK_BAR_DATA) public data){}
// }