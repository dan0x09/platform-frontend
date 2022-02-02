import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
        private config: ConfigService
    ) {}

    form: FormGroup;

    token: string | null;
    error: boolean = false;

    ngOnInit() {
        this.token = this.route.snapshot.queryParamMap.get('t');
        if (this.token) {
            this.form = this.formBuilder.group(
                {
                    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
                    repeatPassword: new FormControl('', [Validators.required]),
                    token: new FormControl(this.token, [Validators.required, Validators.minLength(7)]),
                },
                {
                    validators: [
                        (fg: FormGroup) => {
                            return fg.value.password === fg.value.repeatPassword;
                        },
                    ],
                }
            );
        } else {
            this.router.navigate(['..']);
        }
    }

    submit() {
        this.error = false;
        if (this.form.valid) {
            const body = {
                token: this.form.value.token,
                password: this.form.value.password,
            };
            this.http.post(this.config.getUrl('/user/change-password'), body).subscribe({
                next: () => {
                    this.router.navigate(['login']);
                },
                error: (e) => console.error(e),
            });
        } else {
            this.error = true;
        }
    }
}
