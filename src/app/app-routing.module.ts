import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Auth/login',
        pathMatch: 'full',
    },
    {
        path: 'Auth',
        loadChildren: () => import('./admin/pages/admin.module').then(m => m.AdminModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
