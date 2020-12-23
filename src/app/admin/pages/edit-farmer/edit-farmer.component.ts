import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Customer, Farmer, System } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-edit-farmer',
  templateUrl: './edit-farmer.component.html',
  styleUrls: ['./edit-farmer.component.css']
})
export class EditFarmerComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  Farmer: Farmer;
  customer: Customer;

  systems: System[];

  ngOnInit(): void {
    const farmerId = this.route.snapshot.paramMap.get('farmerId');
    this.http.get<Farmer>(this.config.getUrl(`/farmer/${farmerId}`))
      .subscribe(
        (contractor: Farmer) => {
          this.Farmer = contractor;
          this.customer = {
            name: this.Farmer.name,
            city: this.Farmer.city,
            zipCode: this.Farmer.zipCode,
            country: this.Farmer.country,
            customerId: this.Farmer.farmerId,
            streetAndNumber: this.Farmer.streetAndNumber
          }
        },
        console.error
      );
      this.http.get<System[]>(this.config.getUrl('/system/'), { params: { contractorId: farmerId } })
        .subscribe(
          (systems: System[]) => {
            this.systems = systems;
          },
          console.error
        )
  }

  submit(customer: Customer) {
    const body = {
      ... customer
    }
    delete body.customerId;

    this.http.patch<Farmer>(this.config.getUrl(`/farmer/${customer.customerId}`), body)
      .subscribe(
        (farmer: Farmer) => this.router.navigate(['farmer'], { relativeTo: this.route.parent }),
        console.error
      );
  }
}
