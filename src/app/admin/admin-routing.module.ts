import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ContractorsComponent } from './pages/contractors/contractors.component';
import { CreateContractorComponent } from './pages/create-contractor/create-contractor.component';
import { CreateFarmerComponent } from './pages/create-farmer/create-farmer.component';
import { CreateInvitationPageComponent } from './pages/create-invitation/create-invitation-page.component';
import { CreateSystemComponent } from './pages/create-system/create-system.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditContractorComponent } from './pages/edit-contractor/edit-contractor.component';
import { EditFarmerComponent } from './pages/edit-farmer/edit-farmer.component';
import { EditSystemComponent } from './pages/edit-system/edit-system.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { FarmersComponent } from './pages/farmers/farmers.component';
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
                path: 'system',
                component: SystemsComponent,
            },
            {
                path: 'contractor',
                component: ContractorsComponent,
            },
            {
                path: 'create-contractor',
                component: CreateContractorComponent,
            },
            {
                path: 'farmer',
                component: FarmersComponent,
            },
            {
                path: 'create-farmer',
                component: CreateFarmerComponent,
            },
            {
                path: 'user',
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
                path: 'edit-farmer/:farmerId',
                component: EditFarmerComponent,
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
