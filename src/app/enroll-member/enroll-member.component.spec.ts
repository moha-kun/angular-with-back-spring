import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollMemberComponent } from './enroll-member.component';

describe('EnrollMemberComponent', () => {
  let component: EnrollMemberComponent;
  let fixture: ComponentFixture<EnrollMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
