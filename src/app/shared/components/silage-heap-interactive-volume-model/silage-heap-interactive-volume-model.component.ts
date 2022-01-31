import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SilageHeapWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silage-heap-interactive-volume-model',
    templateUrl: './silage-heap-interactive-volume-model.component.html',
    styleUrls: ['./silage-heap-interactive-volume-model.component.css'],
})
export class SilageHeapInteractiveVolumeModelComponent implements OnInit {
    constructor(private sanitizer: DomSanitizer) {}

    @Input() data!: SilageHeapWithUrls;

    url: SafeResourceUrl;

    ngOnInit(): void {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.urls.interactiveVolumeModel);
    }
}
