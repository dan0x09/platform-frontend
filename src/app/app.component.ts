import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    isLoggedIn = false;

    constructor(private router: Router, private titleService: Title, private auth: AuthService) {
        this.titleService.setTitle('SilageControl');

        this.router.events.subscribe(() => {
            this.isLoggedIn = this.auth.isLoggedIn();
        });
    }
}
