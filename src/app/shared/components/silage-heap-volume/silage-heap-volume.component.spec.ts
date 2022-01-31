import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilageHeapVolumeComponent } from './silage-heap-volume.component';

describe('SilageHeapVolumeComponent', () => {
    let component: SilageHeapVolumeComponent;
    let fixture: ComponentFixture<SilageHeapVolumeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SilageHeapVolumeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SilageHeapVolumeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
