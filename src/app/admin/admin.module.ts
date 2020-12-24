import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './pages/dashboard/card/card.component';
import { SystemsComponent } from './pages/systems/systems.component';
import { ContractorsComponent } from './pages/contractors/contractors.component';
import { FarmersComponent } from './pages/farmers/farmers.component';
import { SiloDataComponent } from './pages/silo-data/silo-data.component';
import { UsersComponent } from './pages/users/users.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateContractorComponent } from './pages/create-contractor/create-contractor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreateFarmerComponent } from './pages/create-farmer/create-farmer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSortModule } from '@angular/material/sort';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CreateSystemComponent } from './pages/create-system/create-system.component';
import { EditContractorComponent } from './pages/edit-contractor/edit-contractor.component';
import { EditFarmerComponent } from './pages/edit-farmer/edit-farmer.component';
import { EditSystemComponent } from './pages/edit-system/edit-system.component';
import { InvitationsComponent } from './pages/invitations/invitations.component';
import { MatSelectModule } from '@angular/material/select';
import { CreateInvitationPageComponent } from './pages/create-invitation/create-invitation-page.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ViewSiloDatumComponent } from './pages/view-silo-datum/view-silo-datum.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CardComponent,
    SystemsComponent,
    ContractorsComponent,
    FarmersComponent,
    SiloDataComponent,
    UsersComponent,
    CreateContractorComponent,
    CreateFarmerComponent,
    ToolbarComponent,
    CreateSystemComponent,
    EditContractorComponent,
    EditFarmerComponent,
    EditSystemComponent,
    InvitationsComponent,
    CreateInvitationPageComponent,
    EditUserComponent,
    ViewSiloDatumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class AdminModule { }
