import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';

@NgModule({
    declarations: [FarmerComponent],
    imports: [CommonModule, FarmerRoutingModule],
})
export class FarmerModule {}
