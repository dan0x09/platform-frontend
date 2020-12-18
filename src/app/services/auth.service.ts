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
    try {
      this.decodedToken = this.jwtHelper.decodeToken(token);
    } catch (error) {
      console.warn(error);
      this.decodedToken = null;
    }
  }

  getToken(): string {
    return sessionStorage.getItem(this.tokenKey);
  }

  getDecodedToken(): UserTokenPayload | null {
    return this.decodedToken;
  }
}
