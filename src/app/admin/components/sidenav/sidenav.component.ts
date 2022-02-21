import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements AfterViewInit {
    @ViewChild('drawer', { static: true }) public sidenav!: MatDrawer;

    showFiller = false;

    routes = [
        {
            title: 'Dashboard',
            icon: 'dashboard',
            uri: 'dashboard',
        },
        {
            title: 'Systeme',
            icon: 'developer_board',
            uri: 'systems',
        },
        {
            title: 'Lohnunternehmen',
            icon: 'business',
            uri: 'contractors',
        },
        {
            title: 'Betriebe',
            icon: 'agriculture',
            uri: 'farms',
        },
        {
            title: 'Silage',
            icon: 'grass',
            uri: 'silage-heaps',
        },
        {
            title: 'Nutzer',
            icon: 'person',
            uri: 'users',
        },
        {
            title: 'Einladungen',
            icon: 'drafts',
            uri: 'invitations',
        },
    ];

    constructor(private sidenavService: SidenavService, private router: Router) {}

    ngAfterViewInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }

    navigateTo(uri: string): void {
        this.router.navigate([`admin/${uri}`]);
    }
}
