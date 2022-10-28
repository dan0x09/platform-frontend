import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '../../services/config.service';
import { RequestResetPasswordComponent } from './request-reset-password.component';

describe('RequestResetPasswordComponent', () => {
    let component: RequestResetPasswordComponent;
    let fixture: ComponentFixture<RequestResetPasswordComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [RequestResetPasswordComponent],
            providers: [ConfigService, UntypedFormBuilder],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RequestResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
