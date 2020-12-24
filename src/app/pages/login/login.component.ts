import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
import { Role } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private config: ConfigService
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl('admin@example.com', [Validators.required, Validators.email]),
    password: new FormControl('12341234', [Validators.required, Validators.minLength(7)])
  });

  loginError: boolean = false;

  submit() {
    if (this.loginForm.valid) {
      this.http.post(this.config.getUrl('/user/login'), this.loginForm.value, {responseType: 'text'}).subscribe(() => {
        const role = this.auth.getDecodedToken().role;
        switch(role) {
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
      })
    } else {
      this.loginError = true;
    }
  }
}
