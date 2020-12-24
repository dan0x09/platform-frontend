import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloDatumVolumeComponent } from './silo-datum-volume.component';

describe('SiloDatumVolumeComponent', () => {
  let component: SiloDatumVolumeComponent;
  let fixture: ComponentFixture<SiloDatumVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiloDatumVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiloDatumVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
