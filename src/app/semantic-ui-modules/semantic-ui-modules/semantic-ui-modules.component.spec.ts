import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticUiModulesComponent } from './semantic-ui-modules.component';

describe('SemanticUiModulesComponent', () => {
  let component: SemanticUiModulesComponent;
  let fixture: ComponentFixture<SemanticUiModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticUiModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticUiModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
