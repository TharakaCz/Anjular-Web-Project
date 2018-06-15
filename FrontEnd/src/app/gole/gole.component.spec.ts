import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoleComponent } from './gole.component';

describe('GoleComponent', () => {
  let component: GoleComponent;
  let fixture: ComponentFixture<GoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
