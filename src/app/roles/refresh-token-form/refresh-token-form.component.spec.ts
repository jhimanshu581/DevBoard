import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTokenFormComponent } from './refresh-token-form.component';

describe('RefreshTokenFormComponent', () => {
  let component: RefreshTokenFormComponent;
  let fixture: ComponentFixture<RefreshTokenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshTokenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshTokenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
