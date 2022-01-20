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
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private config: ConfigService,
        private http: HttpClient
    ) {}

    invitations: Invitation[];

    ngOnInit(): void {
        this.http.get<Invitation[]>(this.config.getUrl('/invitation/user/')).subscribe((invitations: Invitation[]) => {
            this.invitations = invitations;
            console.log(invitations);
        }, console.error);
    }

    visitCreate() {
        this.router.navigate(['create-invitation'], { relativeTo: this.route.parent });
    }
}
