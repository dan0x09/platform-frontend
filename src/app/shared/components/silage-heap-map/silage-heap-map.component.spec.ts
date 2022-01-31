import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilageHeapMapComponent } from './silage-heap-map.component';

describe('SilageHeapMapComponent', () => {
    let component: SilageHeapMapComponent;
    let fixture: ComponentFixture<SilageHeapMapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SilageHeapMapComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SilageHeapMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
