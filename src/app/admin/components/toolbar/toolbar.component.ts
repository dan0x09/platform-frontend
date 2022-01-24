import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router, public sidenav: SidenavService) {}

    @Input() title!: string;

    ngOnInit(): void {}

    logout() {
        this.sidenav.close();
        this.auth.deleteToken();
        this.router.navigate(['']);
    }
}
