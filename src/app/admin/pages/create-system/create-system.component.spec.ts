import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { CreateSystemComponent } from './create-system.component';

describe('CreateSystemComponent', () => {
    let component: CreateSystemComponent;
    let fixture: ComponentFixture<CreateSystemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [CreateSystemComponent],
            providers: [ConfigService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateSystemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
