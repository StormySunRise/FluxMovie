import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { UserRegistrationComponent } from '../pages/user-registration.component';
import { LibModule } from '../../../../lib/src/lib.module';
import { RouterModule } from '@angular/router';
import { UserRegistrationRoutes } from '../user-registration.routing';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UserRegistrationRoutes),
    LibModule,
    ReactiveFormsModule,
    MatIconModule
  ],
 exports: [UserRegistrationComponent]
})
export class UserRegistrationModule { }
