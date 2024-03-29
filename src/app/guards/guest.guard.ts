import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Role } from '../shared/types/interfaces';

@Injectable({
    providedIn: 'root',
})
export class GuestGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token = this.auth.getDecodedToken();
        if (token && !this.auth.isTokenExpired()) {
            switch (token.role) {
                case Role.ADMIN:
                case Role.OWNER:
                    this.router.navigate(['admin']);
                    return false;
                case Role.CONTRACTOR:
                    this.router.navigate(['contractors']);
                    return false;
                case Role.FARMER:
                    this.router.navigate(['farms']);
                    return false;
                default:
                    // todo add 404 page
                    this.router.navigate(['login']);
                    return false;
            }
        } else {
            return true;
        }
    }
}
