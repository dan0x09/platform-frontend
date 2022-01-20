import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { User } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient,
        private config: ConfigService,
        private toolbarService: ToolbarService
    ) {}

    users: User[];

    visitCreate() {
        this.router.navigate(['create-invitation'], { relativeTo: this.route.parent });
    }

    ngOnInit(): void {
        this.toolbarService.setTitle('Nutzer');
    }

    ngAfterViewInit(): void {
        this.http.get<User[]>(this.config.getUrl('/user/')).subscribe((users: User[]) => {
            this.users = users;
        }, console.error);
    }

    select(user: User) {
        this.router.navigate(['edit-user', user.userId], { relativeTo: this.route.parent });
    }
}
