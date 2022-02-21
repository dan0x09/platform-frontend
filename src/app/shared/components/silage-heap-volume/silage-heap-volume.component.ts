import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-volume',
    templateUrl: './silage-heap-volume.component.html',
    styleUrls: ['./silage-heap-volume.component.css'],
})
export class SilageHeapVolumeComponent implements OnInit, AfterViewInit {
    @Input() data!: SilageHeapWithUrls;

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {}
}
