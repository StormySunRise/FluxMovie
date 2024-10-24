import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogMessageComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isSuccess: boolean, message: string },
    private router: Router,
    public matDialogRef: MatDialogRef<DialogMessageComponent>
  ) {}

  redirectToRoute() {
    this.router.navigate(['/Auth/login']); 
    this.matDialogRef.close();
  }
}
