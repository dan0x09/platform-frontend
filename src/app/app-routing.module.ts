import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { ContractorGuard } from './guards/contractor.guard';
import { FarmerGuard } from './guards/farmer.guard';
import { GuestGuard } from './guards/guest.guard';
import { LoginComponent } from './pages/login/login.component';
import { RequestResetPasswordComponent } from './pages/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
        canActivate: [AdminGuard],
    },
    {
        path: 'contractors',
        loadChildren: () => import('./contractor/contractor.module').then((m) => m.ContractorModule),
        canActivate: [ContractorGuard],
    },
    {
        path: 'farms',
        loadChildren: () => import('./farmer/farmer.module').then((m) => m.FarmerModule),
        canActivate: [FarmerGuard],
    },
    {
        path: '',
        component: LoginComponent,
        canActivate: [GuestGuard],
    },
    {
        path: 'login',
        redirectTo: '',
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [GuestGuard],
    },
    {
        path: 'request-password',
        component: RequestResetPasswordComponent,
        canActivate: [GuestGuard],
    },
    {
        path: 'password',
        component: ResetPasswordComponent,
        canActivate: [GuestGuard],
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
