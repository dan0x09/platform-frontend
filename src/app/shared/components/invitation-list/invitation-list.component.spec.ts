import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { InvitationListComponent } from './invitation-list.component';

describe('InvitationListComponent', () => {
    let component: InvitationListComponent;
    let fixture: ComponentFixture<InvitationListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [InvitationListComponent],
            providers: [ConfigService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InvitationListComponent);
        component = fixture.componentInstance;
        component.invitations = [];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
