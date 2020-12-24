import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSiloDatumComponent } from './view-silo-datum.component';

describe('ViewSiloDataComponent', () => {
  let component: ViewSiloDatumComponent;
  let fixture: ComponentFixture<ViewSiloDatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSiloDatumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSiloDatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
