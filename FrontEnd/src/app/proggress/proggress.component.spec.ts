import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProggressComponent } from './proggress.component';

describe('ProggressComponent', () => {
  let component: ProggressComponent;
  let fixture: ComponentFixture<ProggressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProggressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProggressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
