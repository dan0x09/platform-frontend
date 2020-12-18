import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  cards: Card[] = [
    {
      title: 'Silo Daten',
      uri: 'silo-data'
    },
    {
      title: 'Systeme',
      uri: 'systems'
    },
    {
      title: 'Landwirte',
      uri: 'farmers'
    },
    {
      title: 'Lohnunternehmer',
      uri: 'contractors'
    },
    {
      title: 'Nutzer',
      uri: 'users'
    }
  ]

  ngOnInit(): void {
  }

}
