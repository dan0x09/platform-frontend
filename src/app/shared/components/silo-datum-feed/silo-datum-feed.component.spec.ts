import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloDatumFeedComponent } from './silo-datum-feed.component';

describe('SiloDatumFeedComponent', () => {
  let component: SiloDatumFeedComponent;
  let fixture: ComponentFixture<SiloDatumFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiloDatumFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiloDatumFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
