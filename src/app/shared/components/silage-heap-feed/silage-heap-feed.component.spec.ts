import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilageHeapFeedComponent } from './silage-heap-feed.component';

describe('SilageHeapFeedComponent', () => {
    let component: SilageHeapFeedComponent;
    let fixture: ComponentFixture<SilageHeapFeedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SilageHeapFeedComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SilageHeapFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
