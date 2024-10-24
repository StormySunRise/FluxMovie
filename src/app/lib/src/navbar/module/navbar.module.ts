import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { NavbarComponent } from '../components/navbar.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule   
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
