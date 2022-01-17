import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-request-reset-password',
    templateUrl: './request-reset-password.component.html',
    styleUrls: ['./request-reset-password.component.css'],
})
export class RequestResetPasswordComponent {
    constructor(private formBuilder: FormBuilder, private http: HttpClient, private config: ConfigService) {}

    form: FormGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    error: boolean = false;
    success: boolean = false;

    submit() {
        this.error = false;
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
}
