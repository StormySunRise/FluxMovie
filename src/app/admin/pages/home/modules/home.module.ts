import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from '../home.routing';
import { HomeComponent } from '../pages/home.component';
import { ModalHomeComponent } from '../modals/modal-home.component';

@NgModule({
  declarations: [HomeComponent,ModalHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [HomeComponent,ModalHomeComponent]
})
export class HomeModule { }
