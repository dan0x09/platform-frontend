import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { SilageHeapWithUrls } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-view-silage-heap',
    templateUrl: './view-silage-heap.component.html',
    styleUrls: ['./view-silage-heap.component.css'],
})
export class ViewSilageHeapComponent implements OnInit {
    silageHeapWithUrls: SilageHeapWithUrls;

    constructor(private config: ConfigService, private http: HttpClient, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const silageHeapId = this.route.snapshot.paramMap.get('silageHeapId');
        this.http.get<SilageHeapWithUrls>(this.config.getUrl(`/silage-heap/${silageHeapId}`)).subscribe({
            next: (silageHeapWithUrls: SilageHeapWithUrls) => {
                this.silageHeapWithUrls = silageHeapWithUrls;
            },
            error: (e) => console.error(e),
        });
    }
}
