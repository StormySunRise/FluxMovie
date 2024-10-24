import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { DialogMessageComponent } from '../components/dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DialogMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [DialogMessageComponent]
})
export class DialogModule { }
