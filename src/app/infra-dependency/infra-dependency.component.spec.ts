import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraDependencyComponent } from './infra-dependency.component';

describe('InfraDependencyComponent', () => {
  let component: InfraDependencyComponent;
  let fixture: ComponentFixture<InfraDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraDependencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
