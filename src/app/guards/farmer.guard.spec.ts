import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FarmerGuard } from './farmer.guard';

describe('FarmerGuard', () => {
    let guard: FarmerGuard;
    let routerSpy: jasmine.SpyObj<Router>;
    let serviceStub: Partial<AuthService>;

    beforeEach(() => {
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
        serviceStub = {};
        guard = new FarmerGuard(serviceStub as AuthService, routerSpy); // [3]
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
