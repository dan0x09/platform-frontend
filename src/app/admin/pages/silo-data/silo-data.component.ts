import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-silo-data',
  templateUrl: './silo-data.component.html',
  styleUrls: ['./silo-data.component.css']
})
export class SiloDataComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private config: ConfigService,
    private http: HttpClient
  ) { }

  siloData: any;

  ngOnInit(): void {
    this.http.get<any>(this.config.getUrl(`/silo-data/`))
      .subscribe(
        (siloData) => this.siloData = siloData,
        console.error
      )
  }

  select(siloDatum: any) {
    this.router.navigate(['view-silo-datum', siloDatum.siloDataId], { relativeTo: this.route.parent });
  }

}
