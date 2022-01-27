import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Customer, Farmer } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-farmers',
    templateUrl: './farmers.component.html',
    styleUrls: ['./farmers.component.css'],
})
export class FarmersComponent implements OnInit, AfterViewInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient,
        private config: ConfigService,
        private toolbarService: ToolbarService
    ) {}

    customers: Customer[];

    visitCreate() {
        this.router.navigate(['create-farm'], { relativeTo: this.route.parent });
    }

    ngOnInit() {
        this.toolbarService.setTitle('Betriebe');
    }

    ngAfterViewInit(): void {
        this.http.get<Farmer[]>(this.config.getUrl('/farmer/')).subscribe((farmers: Farmer[]) => {
            this.customers = farmers.map((farmer: Farmer) => {
                const customer: Customer = {
                    customerId: farmer.farmerId,
                    city: farmer.city,
                    name: farmer.name,
                    country: farmer.country,
                    streetAndNumber: farmer.streetAndNumber,
                    zipCode: farmer.zipCode,
                };
                return customer;
            });
        }, console.error);
    }
    select(customer: Customer) {
        this.router.navigate(['edit-farmer', customer.customerId], { relativeTo: this.route.parent });
    }
}
