import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Customer, Farm } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-farms',
    templateUrl: './farms.component.html',
    styleUrls: ['./farms.component.css'],
})
export class FarmsComponent implements OnInit, AfterViewInit {
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
        this.http.get<Farm[]>(this.config.getUrl('/farm/')).subscribe({
            next: (farms: Farm[]) => {
                this.customers = farms.map((farm: Farm) => {
                    const customer: Customer = {
                        customerId: farm.farmId,
                        city: farm.city,
                        name: farm.name,
                        country: farm.country,
                        streetAndNumber: farm.streetAndNumber,
                        zipCode: farm.zipCode,
                    };
                    return customer;
                });
            },
            error: (e) => console.error(e),
        });
    }
    select(customer: Customer) {
        this.router.navigate(['edit-farm', customer.customerId], { relativeTo: this.route.parent });
    }
}
