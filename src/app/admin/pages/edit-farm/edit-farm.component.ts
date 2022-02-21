import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Customer, Farm, System } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-edit-farm',
    templateUrl: './edit-farm.component.html',
    styleUrls: ['./edit-farm.component.css'],
})
export class EditFarmComponent implements OnInit {
    farm: Farm;
    customer: Customer;
    systems: System[];

    constructor(
        private http: HttpClient,
        private config: ConfigService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const farmId = this.route.snapshot.paramMap.get('farmId');
        this.http.get<Farm>(this.config.getUrl(`/farm/${farmId}`)).subscribe({
            next: (farm: Farm) => {
                this.farm = farm;
                this.customer = {
                    name: this.farm.name,
                    city: this.farm.city,
                    zipCode: this.farm.zipCode,
                    country: this.farm.country,
                    customerId: this.farm.farmId,
                    streetAndNumber: this.farm.streetAndNumber,
                };
            },
            error: (e) => console.error(e),
        });

        this.http.get<System[]>(this.config.getUrl('/system/'), { params: { contractorId: farmId } }).subscribe({
            next: (systems: System[]) => {
                this.systems = systems;
            },
            error: (e) => console.error(e),
        });
    }

    submit(customer: Customer): void {
        const body = {
            ...customer,
        };
        delete body.customerId;

        this.http.patch<Farm>(this.config.getUrl(`/farm/${customer.customerId}`), body).subscribe({
            next: () => {
                this.router.navigate(['farms'], { relativeTo: this.route.parent });
            },
            error: (e) => console.error(e),
        });
    }
}
