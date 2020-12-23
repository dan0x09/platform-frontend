import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { CreateCustomer } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-create-farmer',
  templateUrl: './create-farmer.component.html',
  styleUrls: ['./create-farmer.component.css']
})
export class CreateFarmerComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private toolbarService: ToolbarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.toolbarService.setTitle('Landwirt erstellen');
  }

  submit(data: CreateCustomer) {
    this.http.post<any>(this.config.getUrl('/farmer/'), data)
      .subscribe(
        () => this.router.navigate(['farmer'], { relativeTo: this.route.parent }),
        console.error
      );
  }
}
