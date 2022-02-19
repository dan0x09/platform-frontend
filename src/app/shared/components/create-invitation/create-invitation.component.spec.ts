import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from 'src/app/services/config.service';
import { CreateInvitationComponent } from './create-invitation.component';

describe('CreateInvitationComponent', () => {
    let component: CreateInvitationComponent;
    let fixture: ComponentFixture<CreateInvitationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CreateInvitationComponent],
            providers: [ConfigService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateInvitationComponent);
        component = fixture.componentInstance;
        component.allowedRoles = [];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
