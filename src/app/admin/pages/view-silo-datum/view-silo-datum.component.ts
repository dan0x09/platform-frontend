import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { SiloDatum } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-view-silo-datum',
  templateUrl: './view-silo-datum.component.html',
  styleUrls: ['./view-silo-datum.component.css']
})
export class ViewSiloDatumComponent implements OnInit {

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  siloDatum: SiloDatum;

  ngOnInit(): void {
    const siloDatumId = this.route.snapshot.paramMap.get('siloDatumId');
    this.http.get<SiloDatum>(this.config.getUrl(`/silo-data/${siloDatumId}`))
      .subscribe(
        (siloDatum: SiloDatum) => this.siloDatum = siloDatum,
        console.error
      )
  }

}
