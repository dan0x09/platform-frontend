import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { CreateInvitationPageComponent } from './create-invitation-page.component';

describe('CreateInvitationComponent', () => {
    let component: CreateInvitationPageComponent;
    let fixture: ComponentFixture<CreateInvitationPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [CreateInvitationPageComponent],
            providers: [AlertService, AuthService, ConfigService],
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
