import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigSliderComponent } from './gig-slider.component';

describe('GigSliderComponent', () => {
  let component: GigSliderComponent;
  let fixture: ComponentFixture<GigSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
