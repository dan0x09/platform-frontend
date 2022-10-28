import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { Role } from 'src/app/shared/types/interfaces';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    signupForm: UntypedFormGroup;

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
            this.signupForm = this.formBuilder.group(
                {
                    firstName: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
                    lastName: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
                    password: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
                    repeatPassword: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
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
        if (this.signupForm.valid) {
            const formInput = this.signupForm.value as {
                firstName: string;
                lastName: string;
                password: string;
                token: string;
            };
            const body = {
                firstName: formInput.firstName,
                lastName: formInput.lastName,
                password: formInput.password,
                token: formInput.token,
            };

            const url =
                this.auth.decodeToken(this.token).subject === 'invite_user'
                    ? '/invitation/user/accept'
                    : '/user/register';
            this.http.post(this.config.getUrl(url), body).subscribe({
                next: () => {
                    const role = this.auth.getDecodedToken().role;
                    switch (role) {
                        case Role.ADMIN:
                        case Role.OWNER:
                            this.router.navigate(['admin']);
                            break;
                        case Role.CONTRACTOR:
                            this.router.navigate(['../contractor']);
                            break;
                        case Role.FARMER:
                        default:
                            this.router.navigate(['../farmer']);
                    }
                },
                error: (e) => console.error(e),
            });
        } else {
            this.error = true;
        }
    }
}
