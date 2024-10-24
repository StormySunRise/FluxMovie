import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { movieListRoutes } from '../movie-list.routing';
import { MovieListComponent } from '../pages/movie-list.component';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(movieListRoutes)
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
