import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Customer, Contractor, Farmer } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements AfterViewInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: ConfigService
  ) { }

  customers: Customer[];

  visitCreate() {
    this.router.navigate(['create-farmer'], { relativeTo: this.route.parent });
  }

  ngAfterViewInit(): void {
    this.http.get<Farmer[]>(this.config.getUrl('/farmer/'))
      .subscribe(
        (farmers: Farmer[]) => {
          this.customers = farmers.map((farmer: Farmer) => {
            const customer: Customer = {
              customerId: farmer.farmerId,
              city: farmer.city,
              name: farmer.name,
              country: farmer.country,
              streetAndNumber: farmer.streetAndNumber,
              zipCode: farmer.zipCode
            }
            return customer;
          });
        },
        console.error
      );
  }
}
