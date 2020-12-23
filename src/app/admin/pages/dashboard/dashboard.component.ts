import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Card } from './card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }

  cards: Card[] = [
    {
      title: 'Silo Daten',
      uri: 'silo-data'
    },
    {
      title: 'Systeme',
      uri: 'system'
    },
    {
      title: 'Landwirte',
      uri: 'farmer'
    },
    {
      title: 'Lohnunternehmer',
      uri: 'contractor'
    },
    {
      title: 'Nutzer',
      uri: 'user'
    },
    {
      title: 'Einladungen',
      uri: 'invitations'
    }
  ]

  ngOnInit(): void {
    this.toolbarService.setTitle('Dashboard');
  }

}
