import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/module/navbar.module';
import { DialogModule } from './dialog/module/dialog.module';

const AppModules = [
    NavbarModule,
    DialogModule
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [...AppModules]
})
export class LibModule { }
