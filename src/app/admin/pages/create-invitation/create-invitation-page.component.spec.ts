import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInvitationPageComponent } from './create-invitation-page.component';

describe('CreateInvitationComponent', () => {
    let component: CreateInvitationPageComponent;
    let fixture: ComponentFixture<CreateInvitationPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateInvitationPageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateInvitationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
