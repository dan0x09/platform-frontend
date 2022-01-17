import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    constructor(private router: Router, private route: ActivatedRoute) {}

    @Input() card!: Card;

    @HostListener('click', ['$event.target'])
    onClick(host) {
        this.router.navigate([this.card.uri], { relativeTo: this.route.parent });
    }
}
