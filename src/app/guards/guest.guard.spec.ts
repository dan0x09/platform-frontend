import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GuestGuard } from './Guest.guard';

describe('GuestGuard', () => {
    let guard: GuestGuard;
    let routerSpy: jasmine.SpyObj<Router>;
    let serviceStub: Partial<AuthService>;

    beforeEach(() => {
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
        serviceStub = {};
        guard = new GuestGuard(serviceStub as AuthService, routerSpy); // [3]
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
