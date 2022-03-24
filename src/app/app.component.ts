import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    isLoggedIn = true;

    constructor(private titleService: Title, private auth: AuthService) {
        this.titleService.setTitle('Silolytics');
    }

    ngOnInit(): void {
        this.isLoggedIn = this.auth.isLoggedIn();
    }
}
