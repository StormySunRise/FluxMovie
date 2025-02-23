import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)],
    exports: [RouterModule]
})
export class MovieListRoutingModule { }
