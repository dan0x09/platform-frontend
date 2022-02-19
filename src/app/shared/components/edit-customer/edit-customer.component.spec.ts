import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCustomerComponent } from './edit-customer.component';

describe('EditCustomerComponent', () => {
    let component: EditCustomerComponent;
    let fixture: ComponentFixture<EditCustomerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditCustomerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditCustomerComponent);
        component = fixture.componentInstance;
        component.customer = {
            customerId: 1,
            name: 'John Doe',
            streetAndNumber: 'Example Avenu 42',
            city: 'Kiel',
            zipCode: '24118',
            country: 'Germany',
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
