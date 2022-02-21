import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-silage-heaps',
    templateUrl: './silage-heaps.component.html',
    styleUrls: ['./silage-heaps.component.css'],
})
export class SilageHeapsComponent implements OnInit {
    silageHeaps: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private config: ConfigService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.http.get<any>(this.config.getUrl(`/silage-heap/`)).subscribe({
            next: (silageHeaps) => {
                // eslint-disable-next-line
                this.silageHeaps = silageHeaps;
            },
            error: (e) => console.error(e),
        });
    }

    select(silageHeap: any): void {
        // eslint-disable-next-line
        this.router.navigate(['view-silage-heap', silageHeap.silageHeap.silageHeapId], {
            relativeTo: this.route.parent,
        });
    }
}
