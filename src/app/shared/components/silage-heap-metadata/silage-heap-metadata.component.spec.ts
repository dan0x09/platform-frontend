import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilageHeapMetadataComponent } from './silage-heap-metadata.component';

describe('SilageHeapMetadataComponent', () => {
    let component: SilageHeapMetadataComponent;
    let fixture: ComponentFixture<SilageHeapMetadataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SilageHeapMetadataComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SilageHeapMetadataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
