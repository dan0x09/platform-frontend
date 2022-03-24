import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role, UserTokenPayload } from '../shared/types/interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    tokenKey = 'authToken';
    decodedToken: UserTokenPayload | null;
    jwtHelper = new JwtHelperService();

    constructor() {}

    setToken(token: string): void {
        sessionStorage.setItem(this.tokenKey, token);
    }

    getToken(): string {
        return sessionStorage.getItem(this.tokenKey);
    }

    getDecodedToken(): UserTokenPayload | null {
        return this.decodeToken(this.getToken());
    }

    decodeToken(token: string): UserTokenPayload | null {
        return this.jwtHelper.decodeToken(token);
    }

    isTokenExpired(): boolean {
        const token = this.getToken();
        if (token) {
            return this.jwtHelper.isTokenExpired(token);
        }
        return true;
    }

    deleteToken(): void {
        sessionStorage.removeItem(this.tokenKey);
    }

    getRole(): Role {
        const token = this.getDecodedToken();
        if (token && token.role) {
            return token.role as Role;
        } else {
            return Role.GUEST;
        }
    }

    isLoggedIn(): boolean {
        return this.getRole() !== Role.GUEST;
    }
}
