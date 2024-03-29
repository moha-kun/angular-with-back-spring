import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFormationFormComponent } from './create-new-formation-form.component';

describe('CreateNewFormationFormComponent', () => {
  let component: CreateNewFormationFormComponent;
  let fixture: ComponentFixture<CreateNewFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewFormationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
