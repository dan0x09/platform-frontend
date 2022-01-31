import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SilageHeap, SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-volume',
    templateUrl: './silage-heap-volume.component.html',
    styleUrls: ['./silage-heap-volume.component.css'],
})
export class SilageHeapVolumeComponent implements OnInit, AfterViewInit {
    constructor() {}

    @Input() data!: SilageHeapWithUrls;

    ngOnInit(): void {}

    ngAfterViewInit() {}
}
