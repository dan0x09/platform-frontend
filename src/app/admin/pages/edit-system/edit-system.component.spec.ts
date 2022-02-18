import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from 'src/app/services/config.service';
import { EditSystemComponent } from './edit-system.component';

describe('EditSystemComponent', () => {
    let component: EditSystemComponent;
    let fixture: ComponentFixture<EditSystemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [EditSystemComponent],
            providers: [ConfigService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditSystemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
