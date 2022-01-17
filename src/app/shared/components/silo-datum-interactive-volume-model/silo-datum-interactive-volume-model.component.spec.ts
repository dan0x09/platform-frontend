import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloDatumInteractiveVolumeModelComponent } from './silo-datum-interactive-volume-model.component';

describe('SiloDatumInteractiveVolumeModelComponent', () => {
    let component: SiloDatumInteractiveVolumeModelComponent;
    let fixture: ComponentFixture<SiloDatumInteractiveVolumeModelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SiloDatumInteractiveVolumeModelComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SiloDatumInteractiveVolumeModelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
