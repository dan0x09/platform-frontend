import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @ViewChild('drawer', { static: true }) public sidenav!: MatDrawer;

    constructor(private sidenavService: SidenavService, private router: Router) {}

    ngAfterViewInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }

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
            title: 'Silage Daten',
            icon: 'grass',
            uri: 'silo-data',
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

    navigateTo(uri: string) {
        this.router.navigate([`admin/${uri}`]);
    }
}
