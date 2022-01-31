import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSilageHeapComponent } from './view-silage-heap.component';

describe('ViewSilageHeapComponent', () => {
    let component: ViewSilageHeapComponent;
    let fixture: ComponentFixture<ViewSilageHeapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewSilageHeapComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewSilageHeapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
