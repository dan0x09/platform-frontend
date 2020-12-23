import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';
import { Contractor } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-create-system',
  templateUrl: './create-system.component.html',
  styleUrls: ['./create-system.component.css']
})
export class CreateSystemComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contractor: new FormControl('', [Validators.required])
  })

  contractors: Contractor[];

  ngOnInit(): void {
    this.http.get<Contractor[]>(this.config.getUrl('/contractor/'))
      .subscribe(
        (contractors: Contractor[]) => {
          this.contractors = contractors;
        },
        console.error
      )
  }

  submit() {
    if (this.createForm.valid) {
      this.http.post<Contractor>(this.config.getUrl('/system/'), {
        contractorId: this.createForm.value.contractor.contractorId,
        name: this.createForm.value.name
      })
      .subscribe(
        (contractor: Contractor) => {
          this.router.navigate(['system'], { relativeTo: this.route.parent });
        },
        console.error
      )
    }
  }
}
