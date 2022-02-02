import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
        private config: ConfigService
    ) {}

    signupForm: FormGroup;

    token: string | null;
    error: boolean = false;

    ngOnInit() {
        this.token = this.route.snapshot.queryParamMap.get('t');
        if (this.token) {
            this.signupForm = this.formBuilder.group(
                {
                    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
                    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
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
        if (this.signupForm.valid) {
            const body = {
                firstName: this.signupForm.value.firstName,
                lastName: this.signupForm.value.lastName,
                password: this.signupForm.value.password,
                token: this.signupForm.value.token,
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
