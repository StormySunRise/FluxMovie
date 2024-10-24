import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list.component';

export const movieListRoutes: Routes = [
    {
        path: '',
        component: MovieListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(movieListRoutes)],
    exports: [RouterModule]
})
export class MovieListRoutingModule { }
