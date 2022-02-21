import { Component, Input, OnInit } from '@angular/core';
import { SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-metadata',
    templateUrl: './silage-heap-metadata.component.html',
    styleUrls: ['./silage-heap-metadata.component.css'],
})
export class SilageHeapMetadataComponent implements OnInit {
    @Input() data!: SilageHeapWithUrls;

    constructor() {}

    ngOnInit(): void {
        console.log(this.data);
    }
}
