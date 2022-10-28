import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Contractor } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-create-system',
    templateUrl: './create-system.component.html',
    styleUrls: ['./create-system.component.css'],
})
export class CreateSystemComponent implements OnInit {
    createForm: UntypedFormGroup = new UntypedFormGroup({
        name: new UntypedFormControl('', [Validators.required]),
        contractor: new UntypedFormControl('', [Validators.required]),
    });

    contractors: Contractor[];

    constructor(
        private http: HttpClient,
        private config: ConfigService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.http.get<Contractor[]>(this.config.getUrl('/contractor/')).subscribe({
            next: (contractors: Contractor[]) => {
                this.contractors = contractors;
            },
            error: (e) => console.error(e),
        });
    }

    submit(): void {
        if (this.createForm.valid) {
            const formInput = this.createForm.value as { contractor: Contractor; name: string };
            this.http
                .post<Contractor>(this.config.getUrl('/system/'), {
                    contractorId: formInput.contractor.contractorId,
                    name: formInput.name,
                })
                .subscribe({
                    next: () => {
                        this.router.navigate(['systems'], { relativeTo: this.route.parent });
                    },
                    error: (e) => console.error(e),
                });
        }
    }
}
