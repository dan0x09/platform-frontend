import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ContractorGuard } from './contractor.guard';

describe('ContractorGuard', () => {
    let guard: ContractorGuard;
    let routerSpy: jasmine.SpyObj<Router>;
    let serviceStub: Partial<AuthService>;

    beforeEach(() => {
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
        serviceStub = {};
        guard = new ContractorGuard(serviceStub as AuthService, routerSpy); // [3]
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
