import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloDatumMapComponent } from './silo-datum-map.component';

describe('SiloDatumMapComponent', () => {
    let component: SiloDatumMapComponent;
    let fixture: ComponentFixture<SiloDatumMapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SiloDatumMapComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SiloDatumMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
