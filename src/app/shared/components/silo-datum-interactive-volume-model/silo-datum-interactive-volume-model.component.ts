import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SiloDatumWithUrls } from '../../types/interfaces';

@Component({
    selector: 'app-silo-datum-interactive-volume-model',
    templateUrl: './silo-datum-interactive-volume-model.component.html',
    styleUrls: ['./silo-datum-interactive-volume-model.component.css'],
})
export class SiloDatumInteractiveVolumeModelComponent implements OnInit {
    constructor(private sanitizer: DomSanitizer) {}

    @Input() data!: SiloDatumWithUrls;

    url: SafeResourceUrl;

    ngOnInit(): void {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.urls.interactiveVolumeModel);
    }
}
