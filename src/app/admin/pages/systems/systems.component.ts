import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { System } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.component.html',
    styleUrls: ['./systems.component.css'],
})
export class SystemsComponent implements OnInit {
    systems: System[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient,
        private config: ConfigService
    ) {}

    ngOnInit(): void {
        this.http.get<System[]>(this.config.getUrl('/system/')).subscribe({
            next: (systems: System[]) => {
                this.systems = systems;
            },
            error: (e) => console.error(e),
        });
    }

    visitCreate(): void {
        this.router.navigate(['create-system'], { relativeTo: this.route.parent });
    }

    select(system: System): void {
        console.log('select');
        this.router.navigate(['edit-system', system.systemId], { relativeTo: this.route.parent });
    }
}
