import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from '../pages/login.component';
import { loginRoutes } from '../login.routing';
import { RouterModule } from '@angular/router';
import { LibModule } from '../../../../lib/src/lib.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginRoutes),
    LibModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
