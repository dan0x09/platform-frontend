import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ContractorsComponent } from './pages/contractors/contractors.component';
import { CreateContractorComponent } from './pages/create-contractor/create-contractor.component';
import { CreateFarmerComponent } from './pages/create-farmer/create-farmer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FarmersComponent } from './pages/farmers/farmers.component';
import { SiloDataComponent } from './pages/silo-data/silo-data.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'systems',
        component: SystemsComponent
      },
      {
        path: 'contractors',
        component: ContractorsComponent
      },
      {
        path: 'create-contractor',
        component: CreateContractorComponent
      },
      {
        path: 'farmers',
        component: FarmersComponent
      },
      {
        path: 'create-farmer',
        component: CreateFarmerComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'silo-data',
        component: SiloDataComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
