import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-request-reset-password',
    templateUrl: './request-reset-password.component.html',
    styleUrls: ['./request-reset-password.component.css'],
})
export class RequestResetPasswordComponent {
    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private config: ConfigService
    ) {}

    submitted: boolean = false;

    form: FormGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    error: boolean = false;
    success: boolean = false;

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    submit() {
        this.error = false;
        this.submitted = true;

        if (this.form.valid) {
            this.http.post<any>(this.config.getUrl('/user/request-password'), this.form.value).subscribe(
                (res) => {
                    this.success = true;
                },
                (err) => {
                    this.error = true;
                }
            );
        } else {
            this.error = true;
        }
    }

    backToLogin() {
        this.router.navigate(['']);
    }
}
