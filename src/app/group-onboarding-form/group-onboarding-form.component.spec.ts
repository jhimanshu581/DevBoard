import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOnboardingFormComponent } from './group-onboarding-form.component';

describe('GroupOnboardingFormComponent', () => {
  let component: GroupOnboardingFormComponent;
  let fixture: ComponentFixture<GroupOnboardingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupOnboardingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupOnboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
