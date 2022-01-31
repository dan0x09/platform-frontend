import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { SilageHeap, SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-metadata',
    templateUrl: './silage-heap-metadata.component.html',
    styleUrls: ['./silage-heap-metadata.component.css'],
})
export class SilageHeapMetadataComponent implements OnInit {
    constructor() {}

    @Input() data!: SilageHeapWithUrls;

    ngOnInit(): void {
        console.log(this.data);
    }
}
