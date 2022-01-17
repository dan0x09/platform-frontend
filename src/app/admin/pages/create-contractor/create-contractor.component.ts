import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { CreateCustomer } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-create-contractor',
    templateUrl: './create-contractor.component.html',
    styleUrls: ['./create-contractor.component.css'],
})
export class CreateContractorComponent implements OnInit {
    constructor(
        private http: HttpClient,
        private config: ConfigService,
        private toolbarService: ToolbarService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.toolbarService.setTitle('Lohnunternehmer erstellen');
    }

    submit(data: CreateCustomer) {
        this.http
            .post<any>(this.config.getUrl('/contractor/'), data)
            .subscribe(() => this.router.navigate(['contractor'], { relativeTo: this.route.parent }), console.error);
    }
}
