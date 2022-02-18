import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
    let guard: AdminGuard;
    let routerSpy: jasmine.SpyObj<Router>;
    let serviceStub: Partial<AuthService>;

    beforeEach(() => {
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
        serviceStub = {};
        guard = new AdminGuard(serviceStub as AuthService, routerSpy); // [3]
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
