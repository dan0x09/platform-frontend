import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Contractor, Customer, System } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-edit-contractor',
  templateUrl: './edit-contractor.component.html',
  styleUrls: ['./edit-contractor.component.css']
})
export class EditContractorComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contractor: Contractor;
  customer: Customer;

  systems: System[];

  ngOnInit(): void {
    const contractorId = this.route.snapshot.paramMap.get('contractorId');
    this.http.get<Contractor>(this.config.getUrl(`/contractor/${contractorId}`))
      .subscribe(
        (contractor: Contractor) => {
          this.contractor = contractor;
          this.customer = {
            name: this.contractor.name,
            city: this.contractor.city,
            zipCode: this.contractor.zipCode,
            country: this.contractor.country,
            customerId: this.contractor.contractorId,
            streetAndNumber: this.contractor.streetAndNumber
          }
        },
        console.error
      );
      this.http.get<System[]>(this.config.getUrl('/system/'), { params: { contractorId: contractorId } })
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

    this.http.patch<Contractor>(this.config.getUrl(`/contractor/${customer.customerId}`), body)
      .subscribe(
        (farmer: Contractor) => this.router.navigate(['contractor'], { relativeTo: this.route.parent }),
        console.error
      );
  }

  visitSystem(system: System) {
    return this.router.navigate(['edit-system', system.systemId], { relativeTo: this.route.parent });
  }
}
