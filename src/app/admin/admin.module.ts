import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ContractorsComponent } from './pages/contractors/contractors.component';
import { CreateContractorComponent } from './pages/create-contractor/create-contractor.component';
import { CreateFarmComponent } from './pages/create-farm/create-farm.component';
import { CreateInvitationPageComponent } from './pages/create-invitation/create-invitation-page.component';
import { CreateSystemComponent } from './pages/create-system/create-system.component';
import { CardComponent } from './pages/dashboard/card/card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditContractorComponent } from './pages/edit-contractor/edit-contractor.component';
import { EditFarmComponent } from './pages/edit-farm/edit-farm.component';
import { EditSystemComponent } from './pages/edit-system/edit-system.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { InvitationsComponent } from './pages/invitations/invitations.component';
import { SilageHeapsComponent as SilageHeapsComponent } from './pages/silage-heaps/silage-heaps.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewSilageHeapComponent } from './pages/view-silage-heap/view-silage-heap.component';

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        CardComponent,
        SystemsComponent,
        ContractorsComponent,
        FarmsComponent,
        SilageHeapsComponent,
        UsersComponent,
        CreateContractorComponent,
        CreateFarmComponent,
        CreateSystemComponent,
        EditContractorComponent,
        EditFarmComponent,
        EditSystemComponent,
        InvitationsComponent,
        CreateInvitationPageComponent,
        EditUserComponent,
        ViewSilageHeapComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
})
export class AdminModule {}
