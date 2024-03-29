import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleFormationComponent } from './display-single-formation.component';

describe('DisplaySingleFormationComponent', () => {
  let component: DisplaySingleFormationComponent;
  let fixture: ComponentFixture<DisplaySingleFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaySingleFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaySingleFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
