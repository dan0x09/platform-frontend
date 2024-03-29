import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Invitation } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-invitations',
    templateUrl: './invitations.component.html',
    styleUrls: ['./invitations.component.css'],
})
export class InvitationsComponent implements OnInit {
    invitations: Invitation[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private config: ConfigService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.http.get<Invitation[]>(this.config.getUrl('/invitation/user/')).subscribe({
            next: (invitations: Invitation[]) => {
                this.invitations = invitations;
                console.log(invitations);
            },
            error: (e) => console.error(e),
        });
    }

    visitCreate(): void {
        this.router.navigate(['create-invitation'], { relativeTo: this.route.parent });
    }
}
