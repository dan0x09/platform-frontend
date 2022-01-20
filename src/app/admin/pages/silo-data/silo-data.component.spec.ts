import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiloDataComponent } from './silo-data.component';

describe('SiloDataComponent', () => {
    let component: SiloDataComponent;
    let fixture: ComponentFixture<SiloDataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SiloDataComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SiloDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
