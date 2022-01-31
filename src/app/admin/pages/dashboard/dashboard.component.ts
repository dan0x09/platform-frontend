import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Card } from './card';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    constructor(private toolbarService: ToolbarService) {}

    cards: Card[] = [
        {
            title: 'Silage Daten',
            uri: 'silo-data',
        },
        {
            title: 'Systeme',
            uri: 'systems',
        },
        {
            title: 'Betriebe',
            uri: 'farms',
        },
        {
            title: 'Lohnunternehmen',
            uri: 'contractors',
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

    ngOnInit(): void {
        this.toolbarService.setTitle('Dashboard');
    }
}
