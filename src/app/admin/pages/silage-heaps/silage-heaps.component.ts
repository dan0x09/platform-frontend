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
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private config: ConfigService,
        private http: HttpClient
    ) {}

    silageHeaps: any;

    ngOnInit(): void {
        this.http.get<any>(this.config.getUrl(`/silage-heap/`)).subscribe((silageHeaps) => {
            this.silageHeaps = silageHeaps;
        }, console.error);
    }

    select(silageHeap: any) {
        this.router.navigate(['view-silage-heap', silageHeap.silageHeap.silageHeapId], {
            relativeTo: this.route.parent,
        });
    }
}
