import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { Role, UserInvitation } from 'src/app/shared/types/interfaces';
import { AlertService } from 'src/app/services/alert.service';

@Component({
    selector: 'app-create-invitation-page',
    templateUrl: './create-invitation-page.component.html',
    styleUrls: ['./create-invitation-page.component.css'],
})
export class CreateInvitationPageComponent implements OnInit {
    constructor(
        private auth: AuthService,
        private http: HttpClient,
        private config: ConfigService,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService
    ) {}

    allowedRoles: Role[];

    ngOnInit(): void {
        const decodedToken = this.auth.getDecodedToken();
        if (decodedToken.role === Role.OWNER) {
            this.allowedRoles = [Role.ADMIN, Role.CONTRACTOR, Role.FARMER];
        } else if (decodedToken.role === Role.ADMIN) {
            this.allowedRoles = [Role.CONTRACTOR, Role.FARMER];
        } else {
            this.allowedRoles = [];
        }
    }

    invite(invitation: UserInvitation) {
        this.alertService.clear();
        this.http.post(this.config.getUrl('/invitation/user/'), invitation).subscribe(
            (result: any) => {
                this.router.navigate(['invitations'], { relativeTo: this.route.parent });
            },
            (error) => this.alertService.error(error)
        );
    }
}
