import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAreaComponent } from './fixed-area.component';

describe('FixedAreaComponent', () => {
  let component: FixedAreaComponent;
  let fixture: ComponentFixture<FixedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
