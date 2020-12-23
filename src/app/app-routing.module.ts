import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './guards/admin.guard';
import { ContractorGuard } from './guards/contractor.guard';
import { FarmerGuard } from './guards/farmer.guard';
import { GuestGuard } from './guards/guest.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { 
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [ AdminGuard ]
  },
  { 
    path: 'contractor',
    loadChildren: () => import('./contractor/contractor.module').then(m => m.ContractorModule),
    canActivate: [ ContractorGuard ]
  },
  {
    path: 'farmer',
    loadChildren: () => import('./farmer/farmer.module').then(m => m.FarmerModule),
    canActivate: [ FarmerGuard ]
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
