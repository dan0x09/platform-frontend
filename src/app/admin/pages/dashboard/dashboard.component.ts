import { Component } from '@angular/core';
import { Card } from './card';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    cards: Card[] = [
        {
            title: 'Systeme',
            uri: 'systems',
        },
        {
            title: 'Lohnunternehmen',
            uri: 'contractors',
        },
        {
            title: 'Betriebe',
            uri: 'farms',
        },
        {
            title: 'Silage',
            uri: 'silage-heaps',
        },
        {
            title: 'Nutzer',
            uri: 'users',
        },
        {
            title: 'Einladungen',
            uri: 'invitations',
        },
    ];
}
