import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin-routing.module';


@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
})
export class AdminModule { }
