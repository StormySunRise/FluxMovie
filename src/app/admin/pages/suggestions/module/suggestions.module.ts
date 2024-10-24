import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionsComponent } from '../components/suggestions.component';

@NgModule({
  declarations: [SuggestionsComponent],
  imports: [
    CommonModule
  ],
  exports: [SuggestionsComponent]
})
export class SuggestionsModule { }
