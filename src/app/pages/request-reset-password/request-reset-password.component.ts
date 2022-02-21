import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-request-reset-password',
    templateUrl: './request-reset-password.component.html',
    styleUrls: ['./request-reset-password.component.css'],
})
export class RequestResetPasswordComponent {
    form: FormGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    submitted = false;
    error = false;
    success = false;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private config: ConfigService
    ) {}
    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    submit(): void {
        this.error = false;
        this.submitted = true;

        if (this.form.valid) {
            this.http.post<any>(this.config.getUrl('/user/request-password'), this.form.value).subscribe({
                next: () => {
                    this.success = true;
                },
                error: () => (this.error = true),
            });
        } else {
            this.error = true;
        }
    }

    backToLogin(): void {
        this.router.navigate(['']);
    }
}
