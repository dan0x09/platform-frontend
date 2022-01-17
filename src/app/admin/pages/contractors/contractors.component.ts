import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContractorComponent } from 'src/app/contractor/contractor.component';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Contractor, Customer, Farmer } from 'src/app/shared/types/interfaces';

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
        this.toolbarService.setTitle('Lohnunternehmer');
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
