import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMunComponent } from './landing-mun.component';

describe('LandingMunComponent', () => {
  let component: LandingMunComponent;
  let fixture: ComponentFixture<LandingMunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
