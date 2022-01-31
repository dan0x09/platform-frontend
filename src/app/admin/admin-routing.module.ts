import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ContractorsComponent } from './pages/contractors/contractors.component';
import { CreateContractorComponent } from './pages/create-contractor/create-contractor.component';
import { CreateFarmComponent } from './pages/create-farm/create-farm.component';
import { CreateInvitationPageComponent } from './pages/create-invitation/create-invitation-page.component';
import { CreateSystemComponent } from './pages/create-system/create-system.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditContractorComponent } from './pages/edit-contractor/edit-contractor.component';
import { EditFarmComponent } from './pages/edit-farm/edit-farm.component';
import { EditSystemComponent } from './pages/edit-system/edit-system.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { InvitationsComponent } from './pages/invitations/invitations.component';
import { SiloDataComponent } from './pages/silo-data/silo-data.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewSiloDatumComponent } from './pages/view-silo-datum/view-silo-datum.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'systems',
                component: SystemsComponent,
            },
            {
                path: 'contractors',
                component: ContractorsComponent,
            },
            {
                path: 'create-contractor',
                component: CreateContractorComponent,
            },
            {
                path: 'farms',
                component: FarmsComponent,
            },
            {
                path: 'create-farm',
                component: CreateFarmComponent,
            },
            {
                path: 'users',
                component: UsersComponent,
            },
            {
                path: 'silo-data',
                component: SiloDataComponent,
            },
            {
                path: 'create-system',
                component: CreateSystemComponent,
            },
            {
                path: 'edit-contractor/:contractorId',
                component: EditContractorComponent,
            },
            {
                path: 'edit-farm/:farmId',
                component: EditFarmComponent,
            },
            {
                path: 'edit-system/:systemId',
                component: EditSystemComponent,
            },
            {
                path: 'invitations',
                component: InvitationsComponent,
            },
            {
                path: 'create-invitation',
                component: CreateInvitationPageComponent,
            },
            {
                path: 'edit-user/:userId',
                component: EditUserComponent,
            },
            {
                path: 'view-silo-datum/:siloDatumId',
                component: ViewSiloDatumComponent,
            },
            {
                path: '**',
                redirectTo: 'dashboard',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
