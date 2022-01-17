import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloDatumMetadataComponent } from './silo-datum-metadata.component';

describe('SiloDatumMetadataComponent', () => {
    let component: SiloDatumMetadataComponent;
    let fixture: ComponentFixture<SiloDatumMetadataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SiloDatumMetadataComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SiloDatumMetadataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
