import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingToolkitComponent } from './landing-toolkit.component';

describe('LandingToolkitComponent', () => {
  let component: LandingToolkitComponent;
  let fixture: ComponentFixture<LandingToolkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingToolkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
