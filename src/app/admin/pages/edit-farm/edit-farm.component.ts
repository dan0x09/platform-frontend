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
    constructor(
        private http: HttpClient,
        private config: ConfigService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    Farm: Farm;
    customer: Customer;

    systems: System[];

    ngOnInit(): void {
        const farmId = this.route.snapshot.paramMap.get('farmId');
        this.http.get<Farm>(this.config.getUrl(`/farm/${farmId}`)).subscribe((contractor: Farm) => {
            this.Farm = contractor;
            this.customer = {
                name: this.Farm.name,
                city: this.Farm.city,
                zipCode: this.Farm.zipCode,
                country: this.Farm.country,
                customerId: this.Farm.farmId,
                streetAndNumber: this.Farm.streetAndNumber,
            };
        }, console.error);
        this.http
            .get<System[]>(this.config.getUrl('/system/'), { params: { contractorId: farmId } })
            .subscribe((systems: System[]) => {
                this.systems = systems;
            }, console.error);
    }

    submit(customer: Customer) {
        const body = {
            ...customer,
        };
        delete body.customerId;

        this.http
            .patch<Farm>(this.config.getUrl(`/farm/${customer.customerId}`), body)
            .subscribe(
                (farm: Farm) => this.router.navigate(['farms'], { relativeTo: this.route.parent }),
                console.error
            );
    }
}
