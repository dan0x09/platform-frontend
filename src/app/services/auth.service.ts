import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenPayload } from '../shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  tokenKey: string = 'authToken';
  decodedToken: UserTokenPayload | null;
  jwtHelper = new JwtHelperService();

  setToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return sessionStorage.getItem(this.tokenKey);
  }

  getDecodedToken(): UserTokenPayload | null {
    return this.jwtHelper.decodeToken(this.getToken())
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (token) {
      return this.jwtHelper.isTokenExpired(token);
    } return true;
  }

  deleteToken() {
    sessionStorage.removeItem(this.tokenKey);
  }
}
