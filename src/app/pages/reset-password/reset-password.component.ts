import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
    form: UntypedFormGroup;

    token: string | null;
    error = false;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
        private config: ConfigService
    ) {}

    ngOnInit(): void {
        this.token = this.route.snapshot.queryParamMap.get('t');
        if (this.token) {
            this.form = this.formBuilder.group(
                {
                    password: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
                    repeatPassword: new UntypedFormControl('', [Validators.required]),
                    token: new UntypedFormControl(this.token, [Validators.required, Validators.minLength(7)]),
                },
                {
                    validators: [
                        (fg: UntypedFormGroup) => {
                            const formInput = fg.value as { password: string; repeatPassword: string };
                            return formInput.password === formInput.repeatPassword;
                        },
                    ],
                }
            );
        } else {
            this.router.navigate(['..']);
        }
    }

    submit(): void {
        this.error = false;
        if (this.form.valid) {
            const formInput = this.form.value as { token: string; password: string };
            const body = {
                token: formInput.token,
                password: formInput.password,
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
