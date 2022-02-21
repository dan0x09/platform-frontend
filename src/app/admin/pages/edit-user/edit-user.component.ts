import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Role, User } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
    user: User;
    form: FormGroup;

    constructor(private http: HttpClient, private config: ConfigService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const userId = this.route.snapshot.paramMap.get('userId');
        this.http.get<User>(this.config.getUrl(`/user/${userId}`)).subscribe({
            next: (user: User) => {
                this.user = user;
                this.form = new FormGroup({
                    email: new FormControl({ value: this.user.email, disabled: true }),
                    firstName: new FormControl({ value: this.user.firstName, disabled: true }),
                    lastName: new FormControl({ value: this.user.lastName, disabled: true }),
                    role: new FormControl({ value: this.prettyRole(this.user.role as Role), disabled: true }),
                });
            },
            error: (e) => console.error(e),
        });
    }

    prettyRole(role: Role): string {
        if (role === Role.OWNER) {
            return 'Owner';
        } else if (role === Role.ADMIN) {
            return 'Admin';
        } else if (role === Role.CONTRACTOR) {
            return 'Lohnunternehmer';
        } else {
            return 'Landwirt';
        }
    }

    requestDelete(): void {
        console.log('request delete');
    }
}
