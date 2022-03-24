import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { CreateCustomer } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-create-farm',
    templateUrl: './create-farm.component.html',
    styleUrls: ['./create-farm.component.css'],
})
export class CreateFarmComponent {
    constructor(
        private http: HttpClient,
        private config: ConfigService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    submit(data: CreateCustomer): void {
        this.http.post<any>(this.config.getUrl('/farm/'), data).subscribe({
            next: () => {
                this.router.navigate(['farms'], { relativeTo: this.route.parent });
            },
            error: (e) => console.error(e),
        });
    }
}
