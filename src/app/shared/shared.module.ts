import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SystemListComponent } from './components/system-list/system-list.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CreateInvitationComponent } from './components/create-invitation/create-invitation.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserListComponent } from './components/user-list/user-list.component';
import { SiloDatumMetadataComponent } from './components/silo-datum-metadata/silo-datum-metadata.component';
import { SiloDatumMapComponent } from './components/silo-datum-map/silo-datum-map.component';
import { SiloDatumVolumeComponent } from './components/silo-datum-volume/silo-datum-volume.component';
import { SiloDatumFeedComponent } from './components/silo-datum-feed/silo-datum-feed.component';
import { SiloDatumInteractiveVolumeModelComponent } from './components/silo-datum-interactive-volume-model/silo-datum-interactive-volume-model.component';

@NgModule({
    declarations: [
        CreateCustomerComponent,
        CustomerListComponent,
        SystemListComponent,
        EditCustomerComponent,
        CreateInvitationComponent,
        InvitationListComponent,
        UserListComponent,
        SiloDatumMetadataComponent,
        SiloDatumMapComponent,
        SiloDatumVolumeComponent,
        SiloDatumFeedComponent,
        SiloDatumInteractiveVolumeModelComponent,
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatSelectModule,
        MatAutocompleteModule,
    ],
    exports: [
        CreateCustomerComponent,
        CustomerListComponent,
        SystemListComponent,
        EditCustomerComponent,
        CreateInvitationComponent,
        InvitationListComponent,
        UserListComponent,
        SiloDatumMetadataComponent,
        SiloDatumMapComponent,
        SiloDatumVolumeComponent,
        SiloDatumFeedComponent,
        SiloDatumInteractiveVolumeModelComponent,
    ],
})
export class SharedModule {}
