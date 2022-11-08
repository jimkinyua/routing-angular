import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentComponentComponent } from './segment-component.component';

describe('SegmentComponentComponent', () => {
  let component: SegmentComponentComponent;
  let fixture: ComponentFixture<SegmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
