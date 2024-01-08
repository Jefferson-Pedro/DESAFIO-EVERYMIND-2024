import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private snackBar = inject(MatSnackBar);

  constructor() {}

  public showMessageSucess(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 2000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:['notification-success']
    });
  }

  public showMessageFail(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 2000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: ['notification-error']
    });
  }
}
