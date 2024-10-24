import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reportRoutes } from '../report.routing';
import { RouterModule } from '@angular/router';
import { ReportComponent } from '../pages/report.component';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(reportRoutes)
  ],
  exports: [ReportComponent]
})
export class ReportModule { }
