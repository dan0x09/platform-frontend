import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilageHeapsComponent } from './silage-heaps.component';

describe('SilageHeapsComponent', () => {
    let component: SilageHeapsComponent;
    let fixture: ComponentFixture<SilageHeapsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SilageHeapsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SilageHeapsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
