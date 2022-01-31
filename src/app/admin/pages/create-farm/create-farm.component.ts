import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { CreateCustomer } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-create-farm',
    templateUrl: './create-farm.component.html',
    styleUrls: ['./create-farm.component.css'],
})
export class CreateFarmComponent implements OnInit {
    constructor(
        private http: HttpClient,
        private config: ConfigService,
        private toolbarService: ToolbarService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.toolbarService.setTitle('Betrieb anlegen');
    }

    submit(data: CreateCustomer) {
        this.http
            .post<any>(this.config.getUrl('/farm/'), data)
            .subscribe(() => this.router.navigate(['farms'], { relativeTo: this.route.parent }), console.error);
    }
}
