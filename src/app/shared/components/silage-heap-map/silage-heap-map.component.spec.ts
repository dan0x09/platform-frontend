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
        component.data = {
            silageHeap: {
                systemId: 42,
                silageHeapId: 23,
                gpsLocation: 'Located near Kiel',
                name: 'Example Silage Heap',
                createdAt: null,
                updatedAt: null,
            },
            urls: {
                volumeMap: 'URL',
                volumeModel: 'URL',
                interactiveVolumeModel: 'URL',
            },
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
