import { Component, Input, OnInit } from '@angular/core';
import { SilageHeap, SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-feed',
    templateUrl: './silage-heap-feed.component.html',
    styleUrls: ['./silage-heap-feed.component.css'],
})
export class SilageHeapFeedComponent implements OnInit {
    constructor() {}

    @Input() data!: SilageHeapWithUrls;

    ngOnInit(): void {}
}
