import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilageHeapInteractiveVolumeModelComponent } from './silage-heap-interactive-volume-model.component';

describe('SilageHeapInteractiveVolumeModelComponent', () => {
    let component: SilageHeapInteractiveVolumeModelComponent;
    let fixture: ComponentFixture<SilageHeapInteractiveVolumeModelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SilageHeapInteractiveVolumeModelComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SilageHeapInteractiveVolumeModelComponent);
        component = fixture.componentInstance;
        component.data = {
            silageHeap: null,
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
