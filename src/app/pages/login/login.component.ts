import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Role } from 'src/app/shared/types/role';

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
    private userService: UserService
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)])
  });

  loginError: boolean = false;

  submit() {
    if (this.loginForm.valid) {
      this.http.post<void>('/user/login', this.loginForm.value).subscribe(() => {
        const user = this.userService.getUser();

        switch(user.role) {
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
