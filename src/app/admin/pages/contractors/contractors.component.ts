import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Contractor, Customer } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-contractors',
    templateUrl: './contractors.component.html',
    styleUrls: ['./contractors.component.css'],
})
export class ContractorsComponent implements OnInit, AfterViewInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient,
        private config: ConfigService,
        private toolbarService: ToolbarService
    ) {}

    customers: Customer[];

    visitCreate() {
        this.router.navigate(['create-contractor'], { relativeTo: this.route.parent });
    }

    ngOnInit(): void {
        this.toolbarService.setTitle('Lohnunternehmen');
    }

    ngAfterViewInit(): void {
        this.http.get<Contractor[]>(this.config.getUrl('/contractor/')).subscribe((contractors: Contractor[]) => {
            this.customers = contractors.map((contractor: Contractor) => {
                const customer: Customer = {
                    customerId: contractor.contractorId,
                    city: contractor.city,
                    name: contractor.name,
                    country: contractor.country,
                    streetAndNumber: contractor.streetAndNumber,
                    zipCode: contractor.zipCode,
                };
                return customer;
            });
        }, console.error);
    }

    select(customer: Customer) {
        this.router.navigate(['edit-contractor', customer.customerId], { relativeTo: this.route.parent });
    }
}
