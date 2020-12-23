import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';
import { Contractor, GenerateToken, System } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-edit-system',
  templateUrl: './edit-system.component.html',
  styleUrls: ['./edit-system.component.css']
})
export class EditSystemComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private route: ActivatedRoute
  ) { }

  editForm: FormGroup;

  system: System;
  contractor: Contractor;

  token: string | undefined;

  ngOnInit(): void {
    const systemId = this.route.snapshot.paramMap.get('systemId');
    this.http.get<System>(this.config.getUrl(`/system/${systemId}`))
    .subscribe(
      (system: System) => {
        this.system = system;
        this.http.get<Contractor>(this.config.getUrl(`/contractor/${this.system.contractorId}`))
        .subscribe(
          (contractor: Contractor) => {
            this.contractor = contractor;
            this.editForm = new FormGroup({
              name: new FormControl({ value: this.system.name, disabled: true }, [Validators.required]),
              contractor: new FormControl({ value: this.contractor.name, disabled: true }, [Validators.required])
            });
          },
          console.error
        )
      },
      console.error
    )
  }

  generateKey() {
    this.token = undefined;
    this.http.post<GenerateToken>(this.config.getUrl(`/system/${this.system.systemId}/generate-token`), {})
      .subscribe(
        (result: GenerateToken) => {
          this.token = result.token;
        },
        console.error
      )
  }
}
