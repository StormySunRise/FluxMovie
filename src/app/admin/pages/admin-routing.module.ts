import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'movie-list',
                loadChildren: () =>
                    import('./movie-list/modules/movie-list.module').then(m => m.MovieListModule),
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'report',
                loadChildren: () =>
                    import('./report/module/report.module').then((m) => m.ReportModule)
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'login',
                loadChildren: () =>
                    import('./login/module/login.module').then((m) => m.LoginModule)
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'user-registration',
                loadChildren: () =>
                    import('./user-registration/module/user-registration.module').then((m) => m.UserRegistrationModule)
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/modules/home.module').then((m) => m.HomeModule)
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(AdminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
