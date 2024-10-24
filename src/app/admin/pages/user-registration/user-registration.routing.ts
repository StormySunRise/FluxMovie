import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './pages/user-registration.component';

export const UserRegistrationRoutes: Routes = [
    {
        path: '',
        component: UserRegistrationComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(UserRegistrationRoutes)],
    exports: [RouterModule]
})
export class UserRegistrationRoutingModule { }
