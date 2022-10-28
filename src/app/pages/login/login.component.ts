import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/shared/types/interfaces';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    loginForm: UntypedFormGroup = this.formBuilder.group({
        email: new UntypedFormControl('', [Validators.required, Validators.email]),
        password: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
    });

    submitted = false;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private http: HttpClient,
        private router: Router,
        private auth: AuthService,
        private config: ConfigService,
        private alertService: AlertService
    ) {}

    get f(): { [key: string]: AbstractControl } {
        return this.loginForm.controls;
    }

    submit(): void {
        this.submitted = true;
        this.alertService.clear();

        if (this.loginForm.valid) {
            this.http.post(this.config.getUrl('/user/login'), this.loginForm.value).subscribe({
                next: () => {
                    window.location.reload();
                    const role = this.auth.getDecodedToken().role;
                    switch (role) {
                        case Role.ADMIN:
                        case Role.OWNER:
                            this.router.navigate(['admin']);
                            break;
                        case Role.CONTRACTOR:
                            this.router.navigate(['contractor']);
                            break;
                        case Role.FARMER:
                        default:
                            this.router.navigate(['farms']);
                    }
                },
                error: (error) => {
                    this.alertService.error(error as string);
                },
            });
        }
    }
}
