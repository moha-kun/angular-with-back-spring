import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationListOfMemberComponent } from './formation-list-of-member.component';

describe('FormationListOfMemberComponent', () => {
  let component: FormationListOfMemberComponent;
  let fixture: ComponentFixture<FormationListOfMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationListOfMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationListOfMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
