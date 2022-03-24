import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { User } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit {
    users: User[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient,
        private config: ConfigService
    ) {}

    ngAfterViewInit(): void {
        this.http.get<User[]>(this.config.getUrl('/user/')).subscribe({
            next: (users: User[]) => {
                this.users = users;
            },
            error: (e) => console.error(e),
        });
    }

    async visitCreate(): Promise<void> {
        await this.router.navigate(['create-invitation'], { relativeTo: this.route.parent });
    }
    async select(user: User): Promise<void> {
        await this.router.navigate(['edit-user', user.userId], { relativeTo: this.route.parent });
    }
}
