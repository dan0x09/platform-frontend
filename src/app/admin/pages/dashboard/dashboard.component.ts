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
            title: 'Silo Daten',
            uri: 'silo-data',
        },
        {
            title: 'Systeme',
            uri: 'system',
        },
        {
            title: 'Betriebe',
            uri: 'farmer',
        },
        {
            title: 'Lohnunternehmen',
            uri: 'contractor',
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
