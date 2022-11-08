import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHolderComponentComponent } from './place-holder-component.component';

describe('PlaceHolderComponentComponent', () => {
  let component: PlaceHolderComponentComponent;
  let fixture: ComponentFixture<PlaceHolderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceHolderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceHolderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
